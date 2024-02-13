import Cookies from "js-cookie";

export function getCookie(name: string): string | undefined {
  return Cookies.get(name);
}

export function setCookie(name: string, value: string): void {
  Cookies.set(name, value, { expires: 365 });
}

export function updateCookieExpiration(name: string): void {
  const cookieValue = Cookies.get(name);
  if (cookieValue !== undefined) {
    Cookies.set(name, cookieValue, { expires: 365 });
  }
}
