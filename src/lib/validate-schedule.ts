import { isValidDateOnly, isValidTime } from "@/lib/schedule-date";
import type { ScheduleDataset, ScheduleEvent, ScheduleGame } from "@/types/schedule";

const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const TERMINAL_GAME_STATUSES = new Set(["completed", "cancelled"]);
const PUBLICATION_STATUSES = new Set(["awaiting-approval", "published"]);
const EVENT_TYPES = new Set(["tournament", "game", "scrimmage", "other"]);
const EVENT_STATUSES = new Set([
  "tentative",
  "scheduled",
  "in-progress",
  "completed",
  "cancelled",
  "postponed",
]);
const GAME_STATUSES = new Set(["scheduled", "completed", "cancelled"]);

function fail(message: string): never {
  throw new Error(`[schedule data] ${message}`);
}

function requireText(value: string, context: string, field: string) {
  if (value.trim().length === 0) fail(`${context} has an empty ${field}.`);
}

function validateDate(value: string, context: string, field: string) {
  if (!isValidDateOnly(value)) {
    fail(`${context} has invalid ${field} "${value}"; expected YYYY-MM-DD.`);
  }
}

function validateTimeAndZone(
  time: string | undefined,
  timezone: string | undefined,
  context: string,
) {
  if (time !== undefined && !isValidTime(time)) {
    fail(`${context} has invalid startTime "${time}"; expected HH:mm in 24-hour time.`);
  }
  if (time !== undefined && timezone === undefined) {
    fail(`${context} must include timezone when startTime is supplied.`);
  }
  if (timezone !== undefined) {
    requireText(timezone, context, "timezone");
    if (time === undefined) fail(`${context} must include startTime when timezone is supplied.`);
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: timezone }).format();
    } catch {
      fail(`${context} has invalid IANA timezone "${timezone}".`);
    }
  }
}

function validateOptionalText(value: string | undefined, context: string, field: string) {
  if (value !== undefined) requireText(value, context, field);
}

function validateGame(game: ScheduleGame, event: ScheduleEvent, gameIds: Set<string>) {
  const context = `Event "${event.id}" game "${game.id}"`;
  if (!ID_PATTERN.test(game.id)) fail(`${context} must use a lowercase kebab-case ID.`);
  if (gameIds.has(game.id)) fail(`Event "${event.id}" has duplicate game ID "${game.id}".`);
  gameIds.add(game.id);

  if (!GAME_STATUSES.has(game.status)) fail(`${context} has invalid status "${game.status}".`);

  requireText(game.opponent, context, "opponent");
  for (const [field, value] of [
    ["round", game.round],
    ["field", game.field],
    ["resultNote", game.resultNote],
  ] as const) validateOptionalText(value, context, field);

  if (game.date !== undefined) {
    validateDate(game.date, context, "date");
    const eventEnd = event.endDate ?? event.startDate;
    if (game.date < event.startDate || game.date > eventEnd) {
      fail(`${context} date "${game.date}" falls outside event dates ${event.startDate}–${eventEnd}.`);
    }
  }
  validateTimeAndZone(game.startTime, game.timezone, context);

  const scores = [game.whisperScore, game.opponentScore];
  for (const score of scores) {
    if (score !== undefined && (!Number.isInteger(score) || score < 0)) {
      fail(`${context} scores must be non-negative integers.`);
    }
  }
  const hasBothScores = scores.every((score) => score !== undefined);
  const hasAnyScore = scores.some((score) => score !== undefined);
  if (game.status === "completed" && !hasBothScores) {
    fail(`${context} is completed and requires both scores.`);
  }
  if (game.status !== "completed" && hasAnyScore) {
    fail(`${context} is not completed and must not include final scores.`);
  }
}

export function validateScheduleData({ season, events }: ScheduleDataset) {
  if (!ID_PATTERN.test(season.id)) fail(`Season ID "${season.id}" must use lowercase kebab-case.`);
  requireText(season.label, `Season "${season.id}"`, "label");
  if (!PUBLICATION_STATUSES.has(season.publicationStatus)) {
    fail(`Season "${season.id}" has invalid publicationStatus "${season.publicationStatus}".`);
  }
  validateOptionalText(season.description, `Season "${season.id}"`, "description");

  if ((season.startDate === undefined) !== (season.endDate === undefined)) {
    fail(`Season "${season.id}" must include both startDate and endDate, or neither.`);
  }
  if (season.startDate && season.endDate) {
    validateDate(season.startDate, `Season "${season.id}"`, "startDate");
    validateDate(season.endDate, `Season "${season.id}"`, "endDate");
    if (season.endDate < season.startDate) fail(`Season "${season.id}" endDate precedes startDate.`);
  }
  if (season.publicationStatus === "awaiting-approval" && events.length > 0) {
    fail(`Season "${season.id}" is awaiting approval but contains public events.`);
  }

  const eventIds = new Set<string>();
  for (const event of events) {
    const context = `Season "${season.id}" event "${event.id}"`;
    if (!ID_PATTERN.test(event.id)) fail(`${context} must use a lowercase kebab-case ID.`);
    if (eventIds.has(event.id)) fail(`Season "${season.id}" has duplicate event ID "${event.id}".`);
    eventIds.add(event.id);

    requireText(event.name, context, "name");
    if (!EVENT_TYPES.has(event.type)) fail(`${context} has invalid type "${event.type}".`);
    if (!EVENT_STATUSES.has(event.status)) fail(`${context} has invalid status "${event.status}".`);
    validateDate(event.startDate, context, "startDate");
    if (event.endDate !== undefined) {
      validateDate(event.endDate, context, "endDate");
      if (event.endDate < event.startDate) fail(`${context} endDate precedes startDate.`);
    }
    if (season.startDate && season.endDate) {
      const eventEnd = event.endDate ?? event.startDate;
      if (event.startDate < season.startDate || eventEnd > season.endDate) {
        fail(`${context} dates fall outside season dates ${season.startDate}–${season.endDate}.`);
      }
    }
    validateTimeAndZone(event.startTime, event.timezone, context);
    for (const [field, value] of [
      ["locationName", event.locationName],
      ["location", event.location],
      ["description", event.description],
    ] as const) validateOptionalText(value, context, field);

    if (event.externalUrl !== undefined) {
      try {
        const url = new URL(event.externalUrl);
        if (url.protocol !== "https:" || url.username || url.password) throw new Error();
      } catch {
        fail(`${context} externalUrl must be a safe HTTPS URL.`);
      }
    }
    if (event.sortOrder !== undefined && !Number.isInteger(event.sortOrder)) {
      fail(`${context} sortOrder must be an integer.`);
    }

    const gameIds = new Set<string>();
    for (const game of event.games ?? []) validateGame(game, event, gameIds);

    if (event.status === "completed") {
      const unfinished = (event.games ?? []).find(
        (game) => !TERMINAL_GAME_STATUSES.has(game.status),
      );
      if (unfinished) fail(`${context} is completed but game "${unfinished.id}" is not terminal.`);
    } else if (event.status !== "in-progress") {
      const completed = (event.games ?? []).find((game) => game.status === "completed");
      if (completed) {
        fail(`${context} is ${event.status} but game "${completed.id}" is completed.`);
      }
    }
  }
}
