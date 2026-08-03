const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const TIME_PATTERN = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function getCurrentDateInTimeZone(
  timeZone: string,
  now: Date = new Date(),
) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone,
  }).formatToParts(now);
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

export function isValidDateOnly(value: string) {
  const match = DATE_PATTERN.exec(value);
  if (!match) return false;
  const [, year, month, day] = match;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  return (
    date.getUTCFullYear() === Number(year) &&
    date.getUTCMonth() === Number(month) - 1 &&
    date.getUTCDate() === Number(day)
  );
}

export function isValidTime(value: string) {
  return TIME_PATTERN.test(value);
}

function dateOnlyToUtc(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export function formatEventDate(startDate: string, endDate?: string) {
  const start = dateOnlyToUtc(startDate);
  if (!endDate || endDate === startDate) return dateFormatter.format(start);

  const end = dateOnlyToUtc(endDate);
  const sameYear = start.getUTCFullYear() === end.getUTCFullYear();
  const sameMonth = sameYear && start.getUTCMonth() === end.getUTCMonth();

  if (sameMonth) {
    const month = new Intl.DateTimeFormat("en-US", {
      month: "long",
      timeZone: "UTC",
    }).format(start);
    return `${month} ${start.getUTCDate()}–${end.getUTCDate()}, ${end.getUTCFullYear()}`;
  }

  if (sameYear) {
    const withoutYear = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    });
    return `${withoutYear.format(start)}–${shortDateFormatter.format(end)}`;
  }

  return `${shortDateFormatter.format(start)}–${shortDateFormatter.format(end)}`;
}

export function formatGameDate(value: string) {
  return shortDateFormatter.format(dateOnlyToUtc(value));
}

export function formatTime(value: string, timezone: string) {
  const [hour, minute] = value.split(":").map(Number);
  const time = new Date(Date.UTC(2000, 0, 1, hour, minute));
  const label = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(time);
  return `${label} ${timezone}`;
}
