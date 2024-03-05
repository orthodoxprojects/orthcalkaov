// Calculate Pascha based on Jacques Oudin Algorithm
export function calculatePascha(year: number): Date {
  const G: number = year % 19;
  const I: number = (19 * G + 15) % 30;
  const J: number = (year + Math.floor(year / 4) + I) % 7;
  const L: number = I - J;
  const easterMonth: number = 3 + Math.floor((L + 40) / 44);
  const easterDay: number = L + 28 - 31 * Math.floor(easterMonth / 4);
  const julianPaschaDate: Date = new Date(year, easterMonth - 1, easterDay);
  return julianPaschaDate;
}
