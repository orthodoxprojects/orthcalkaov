import React, { useState, useEffect, useRef } from "react";
import {
  getCookie,
  setCookie,
  updateCookieExpiration,
} from "./utils/cookieUtils";
import {
  decreaseDateByDays,
  increaseDateByDays,
  formatDate,
  getDaysArrayForMonth,
} from "./utils/dateUtils";
import localeEn from "./assets/lang/en/others/locale.json";
import localeRo from "./assets/lang/ro/others/locale.json";
import localeEl from "./assets/lang/el/others/locale.json";
import Drawer from "./components/Drawer";
import Button from "./components/Button";
import Paschalion from "./components/Paschalion";
import WarningYearsInterval from "./components/WarningYearsInterval";
import CalAbbr from "./components/CalAbbr";
import Fasting from "./components/Fasting";
import MoonPhase from "./components/MoonPhase";
import FeastsMovable from "./components/FeastsMovable";
import FeastsFixed from "./components/FeastsFixed";
import Sunday from "./components/Sunday";

function App() {
  // Retrieve from cookies if available
  const initialSelectLanguage = getCookie("selectLanguage");
  const initialSelectCalendar = getCookie("selectCalendar");
  const initialSelectFasting = getCookie("selectFasting");

  // Update Cookies expiration date if available
  initialSelectLanguage ? updateCookieExpiration("selectLanguage") : null;
  initialSelectCalendar ? updateCookieExpiration("selectCalendar") : null;
  initialSelectFasting ? updateCookieExpiration("selectFasting") : null;

  // Set state to the cookie value if available, otherwise to default
  const [selectLanguage, setSelectLanguage] = useState<string>(
    initialSelectLanguage ? initialSelectLanguage : "en"
  );
  const [selectCalendar, setSelectCalendar] = useState<string>(
    initialSelectCalendar ? initialSelectCalendar : "new"
  );
  const [selectFasting, setSelectFasting] = useState<string>(
    initialSelectFasting ? initialSelectFasting : "layman"
  );

  // Set Language Value
  const onSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectLanguageValue = event.target.value;
    setSelectLanguage(selectLanguageValue);
    setCookie("selectLanguage", selectLanguageValue);
  };

  // Set Calendar Value
  const onSelectCalendar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectCalendarValue = event.target.value;
    setSelectCalendar(selectCalendarValue);
    setCookie("selectCalendar", selectCalendarValue);
  };

  // Set Fasting Value
  const onSelectFasting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectFastingValue = event.target.value;
    setSelectFasting(selectFastingValue);
    setCookie("selectFasting", selectFastingValue);
  };

  // Initial date
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const dateNewCalendar = new Date(year, month, day);
  const dateOldCalendar = decreaseDateByDays(dateNewCalendar, 13);
  const [date, setDate] = useState(
    selectCalendar === "new" ? dateNewCalendar : dateOldCalendar
  );

  // Decrease, Increase and Reset Month and Year
  const decreaseMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
    date.getFullYear() > 1925 ||
    (date.getFullYear() === 1925 && date.getMonth() > 0)
      ? setDate(newDate)
      : null;
  };
  const increaseMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
    const maxDate = new Date(2099, 11); // December 2099
    newDate > maxDate ? setDate(maxDate) : setDate(newDate);
  };
  const decreaseYear = () => {
    const newYear = date.getFullYear() - 1;
    newYear > 1924
      ? setDate(
          (prevDate) =>
            new Date(prevDate.getFullYear() - 1, prevDate.getMonth())
        )
      : null;
  };
  const increaseYear = () => {
    const newDate = new Date(date.getFullYear() + 1, date.getMonth());
    date.getFullYear() < 2099 ? setDate(newDate) : null;
  };
  const resetMonthYear = () => {
    const newDate =
      selectCalendar === "new" ? dateNewCalendar : dateOldCalendar;
    setDate(newDate);
  };

  // Get New Date for Content
  const getNewDate = (day: number): Date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, day);
  };

  // Get Locale
  const getLocale =
    selectLanguage === "ro"
      ? localeRo[0]
      : selectLanguage === "el"
      ? localeEl[0]
      : localeEn[0];

  // Scroll to scrollToRef
  const scrollToRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [dateNewCalendar, dateOldCalendar]);
  return (
    <div className="min-h-dvh bg-stone-950">
      <div className="sticky top-0 w-full bg-[#a89894] text-stone-950">
        <div className="navbar">
          <div className="navbar-start">
            <Drawer
              selectLanguage={selectLanguage}
              defaultLanguageValue={selectLanguage}
              defaultCalendarValue={selectCalendar}
              defaultFastingValue={selectFasting}
              onSelectLanguage={onSelectLanguage}
              onSelectCalendar={onSelectCalendar}
              onSelectFasting={onSelectFasting}
            />
          </div>

          <div className="navbar-center">
            <Button onClick={decreaseMonth}>
              <img src="./img/chevron_left.svg" alt="chevron_left" />
            </Button>
            <Button styleBtn={{ minWidth: "142px" }} onClick={resetMonthYear}>
              {formatDate(getLocale, date, { showMonth: true })}
            </Button>
            <Button onClick={increaseMonth}>
              <img src="./img/chevron_right.svg" alt="chevron_right" />
            </Button>
            <Button onClick={decreaseYear}>
              <img src="./img/chevron_left.svg" alt="chevron_left" />
            </Button>
            <Button styleBtn={{ minWidth: "51px" }} onClick={resetMonthYear}>
              {formatDate(getLocale, date, { showYear: true })}
            </Button>
            <Button onClick={increaseYear}>
              <img src="./img/chevron_right.svg" alt="chevron_right" />
            </Button>
          </div>

          <div className="navbar-end">
            <Paschalion
              selectLanguage={selectLanguage}
              yearValue={formatDate(getLocale, date, { showYear: true })}
              selectCalendar={selectCalendar}
              getLocale={getLocale}
            />
          </div>
        </div>
      </div>
      {date.getFullYear() > 1924 && date.getFullYear() < 2100 ? (
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 p-2">
          {getDaysArrayForMonth(date).map((day) => (
            <div
              ref={
                selectCalendar === "new" &&
                getNewDate(day).getFullYear() === currentDate.getFullYear() &&
                getNewDate(day).getMonth() === currentDate.getMonth() &&
                getNewDate(day).getDate() === currentDate.getDate()
                  ? scrollToRef
                  : selectCalendar === "old" &&
                    getNewDate(day).getFullYear() ===
                      decreaseDateByDays(currentDate, 13).getFullYear() &&
                    getNewDate(day).getMonth() ===
                      decreaseDateByDays(currentDate, 13).getMonth() &&
                    getNewDate(day).getDate() ===
                      decreaseDateByDays(currentDate, 13).getDate()
                  ? scrollToRef
                  : null
              }
              key={day}
              className={`${
                selectCalendar === "new" &&
                getNewDate(day).getFullYear() === currentDate.getFullYear() &&
                getNewDate(day).getMonth() === currentDate.getMonth() &&
                getNewDate(day).getDate() === currentDate.getDate()
                  ? "bg-stone-700"
                  : selectCalendar === "old" &&
                    getNewDate(day).getFullYear() ===
                      decreaseDateByDays(currentDate, 13).getFullYear() &&
                    getNewDate(day).getMonth() ===
                      decreaseDateByDays(currentDate, 13).getMonth() &&
                    getNewDate(day).getDate() ===
                      decreaseDateByDays(currentDate, 13).getDate()
                  ? "bg-stone-700"
                  : "bg-stone-800"
              } grid grid-cols-[80px_auto] p-2 m-0 rounded-xl`}
            >
              <div
                className={`${
                  selectCalendar === "new" && getNewDate(day).getDay() === 0
                    ? "text-red-300"
                    : selectCalendar === "old" && getNewDate(day).getDay() === 1
                    ? "text-red-300"
                    : "text-stone-300"
                } pr-2 text-center`}
              >
                <div className="text-sm lg:text-base font-bold">
                  {selectCalendar === "new"
                    ? formatDate(getLocale, getNewDate(day), {
                        showWeekday: true,
                      })
                    : formatDate(getLocale, getNewDate(day - 1), {
                        showWeekday: true,
                      })}
                </div>
                <div className="text-sm lg:text-base font-bold">
                  {day}/{date.getMonth() + 1}
                </div>
                <div className="text-[12px] lg:text-sm">
                  {`${
                    selectCalendar === "new"
                      ? decreaseDateByDays(getNewDate(day), 13).getDate()
                      : increaseDateByDays(getNewDate(day), 13).getDate()
                  }/${
                    selectCalendar === "new"
                      ? decreaseDateByDays(getNewDate(day), 13).getMonth() + 1
                      : increaseDateByDays(getNewDate(day), 13).getMonth() + 1
                  } `}
                  <CalAbbr
                    selectLanguage={selectLanguage}
                    selectCalendar={selectCalendar}
                  />
                </div>
                <div className="flex justify-between">
                  <Fasting />
                  <MoonPhase
                    date={date}
                    day={day}
                    selectCalendar={selectCalendar}
                  />
                </div>
              </div>
              <div className="pl-2 border-l-[1px] border-stone-300">
                <FeastsMovable />
                <FeastsFixed
                  selectLanguage={selectLanguage}
                  getMonthIndex={date.getMonth()}
                  getDayIndex={day.toString()}
                  selectCalendar={selectCalendar}
                />
                <Sunday
                  selectLanguage={selectLanguage}
                  selectCalendar={selectCalendar}
                  date={date}
                  day={day}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <WarningYearsInterval selectLanguage={selectLanguage} />
      )}
    </div>
  );
}

export default App;
