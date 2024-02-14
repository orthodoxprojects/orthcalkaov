import { add, sub, Duration } from "date-fns";

interface FormatOptions {
  showWeekday?: boolean;
  showDay?: boolean;
  showMonth?: boolean;
  showYear?: boolean;
}

export function decreaseDateByDays(date: Date, days: number): Date {
  const duration: Duration = { days };
  return sub(date, duration);
}

export function increaseDateByDays(date: Date, days: number): Date {
  const duration: Duration = { days };
  return add(date, duration);
}

export function formatDate(
  getLocale: any,
  date: Date,
  options: FormatOptions = {}
): string {
  const {
    showWeekday = false,
    showDay = false,
    showMonth = false,
    showYear = false,
  } = options;

  if (!showWeekday && !showDay && !showMonth && !showYear) {
    return "";
  }

  const formatParts: string[] = [];

  if (showWeekday) formatParts.push("EEEE");
  if (showDay) formatParts.push("d");
  if (showMonth) formatParts.push("MMMM");
  if (showYear) formatParts.push("y");

  const formattedDate = date.toLocaleDateString(getLocale, {
    weekday: showWeekday ? "short" : undefined,
    day: showDay ? "numeric" : undefined,
    month: showMonth ? "long" : undefined,
    year: showYear ? "numeric" : undefined,
  });

  return formattedDate.toUpperCase();
}

export function getDaysArrayForMonth(date: Date): number[] {
  const daysInMonthArray: number[] = [];
  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the specified month

  for (let i = 1; i <= daysInMonth; i++) {
    daysInMonthArray.push(i); // Push each day of the month to the array
  }

  return daysInMonthArray;
}
