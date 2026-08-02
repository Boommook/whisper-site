import type {
  LeadershipAssignment,
  PublicPlayer,
  SeasonMetadata,
} from "@/types/roster";

const MIN_CLASS_YEAR = 2020;
const MAX_CLASS_YEAR = 2040;
const PLAYER_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

type RosterDataset = Readonly<{
  season: SeasonMetadata;
  players: readonly PublicPlayer[];
  leadership: readonly LeadershipAssignment[];
}>;

function fail(message: string): never {
  throw new Error(`[roster data] ${message}`);
}

function requireText(value: string, field: string, recordId: string) {
  if (value.trim().length === 0) {
    fail(`Player "${recordId}" has an empty ${field}.`);
  }
}

export function validateRosterData({ season, players, leadership }: RosterDataset) {
  if (season.label.trim().length === 0 || season.rosterHeading.trim().length === 0) {
    fail("Season label and roster heading must not be empty.");
  }

  const playerIds = new Set<string>();
  const playersById = new Map<string, PublicPlayer>();
  const jerseyNumbers = new Set<number>();

  for (const player of players) {
    if (!PLAYER_ID_PATTERN.test(player.id)) {
      fail(
        `Player ID "${player.id}" must use lowercase kebab-case letters and numbers.`,
      );
    }
    if (playerIds.has(player.id)) {
      fail(`Duplicate player ID "${player.id}".`);
    }
    playerIds.add(player.id);
    playersById.set(player.id, player);

    requireText(player.displayName, "displayName", player.id);

    if (
      !Number.isInteger(player.classYear) ||
      player.classYear < MIN_CLASS_YEAR ||
      player.classYear > MAX_CLASS_YEAR
    ) {
      fail(
        `Player "${player.id}" has implausible classYear ${player.classYear}; expected ${MIN_CLASS_YEAR}-${MAX_CLASS_YEAR}.`,
      );
    }

    if (player.jerseyNumber !== undefined) {
      if (!Number.isInteger(player.jerseyNumber) || player.jerseyNumber < 0 || player.jerseyNumber > 99) {
        fail(`Player "${player.id}" has invalid jerseyNumber ${player.jerseyNumber}; expected 0-99.`);
      }
      if (jerseyNumbers.has(player.jerseyNumber)) {
        fail(`Duplicate jersey number ${player.jerseyNumber}.`);
      }
      jerseyNumbers.add(player.jerseyNumber);
    }

    for (const [field, value] of [
      ["fieldRole", player.fieldRole],
      ["pronouns", player.pronouns],
      ["hometown", player.hometown],
      ["major", player.major],
      ["biography", player.biography],
    ] as const) {
      if (value !== undefined) requireText(value, field, player.id);
    }

    if (player.portrait) {
      if (
        !player.portrait.src.startsWith("/images/players/") ||
        player.portrait.src.includes("..")
      ) {
        fail(`Player "${player.id}" portrait must use a safe path under /images/players/.`);
      }
      requireText(player.portrait.alt, "portrait.alt", player.id);
      if (
        !Number.isInteger(player.portrait.width) ||
        player.portrait.width <= 0 ||
        !Number.isInteger(player.portrait.height) ||
        player.portrait.height <= 0
      ) {
        fail(`Player "${player.id}" portrait width and height must be positive integers.`);
      }
    }

    if (player.socialLink) {
      requireText(player.socialLink.label, "socialLink.label", player.id);
      if (!player.socialLink.href.startsWith("https://")) {
        fail(`Player "${player.id}" socialLink must use HTTPS.`);
      }
    }
  }

  const leadershipKeys = new Set<string>();
  for (const assignment of leadership) {
    const leader = playersById.get(assignment.playerId);
    if (!leader) {
      fail(
        `Leadership role "${assignment.role}" references nonexistent player "${assignment.playerId}".`,
      );
    }
    if (leader.status !== "active") {
      fail(
        `Leadership role "${assignment.role}" references inactive player "${assignment.playerId}".`,
      );
    }
    const key = `${assignment.playerId}:${assignment.role}`;
    if (leadershipKeys.has(key)) {
      fail(`Duplicate leadership assignment "${assignment.role}" for "${assignment.playerId}".`);
    }
    leadershipKeys.add(key);
  }
}
