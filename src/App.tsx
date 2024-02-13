import React, { useState } from "react";
import {
  getCookie,
  setCookie,
  updateCookieExpiration,
} from "./utils/cookieUtils";
import { decreaseDateByDays, formatDate } from "./utils/dateUtils";
import locale from "./assets/lang/others/locale.json";
import Drawer from "./components/Drawer";
import Button from "./components/Button";
import Paschalion from "./components/Paschalion";

function App() {
  // Retrieve from cookies if available
  const initialSelectCalendar = getCookie("selectCalendar");
  const initialSelectFasting = getCookie("selectFasting");

  // Update Cookies expiration date if available
  initialSelectCalendar ? updateCookieExpiration("selectCalendar") : null;
  initialSelectFasting ? updateCookieExpiration("selectFasting") : null;

  // Set state to the cookie value if available, otherwise to default
  const [selectCalendar, setSelectCalendar] = useState<string>(
    initialSelectCalendar ? initialSelectCalendar : "new"
  );
  const [selectFasting, setSelectFasting] = useState<string>(
    initialSelectFasting ? initialSelectFasting : "layman"
  );

  // Set Calendar Value
  const onSelectCalendar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectCalendarValue = event.target.value;
    console.log(selectCalendarValue);
    setSelectCalendar(selectCalendarValue);
    setCookie("selectCalendar", selectCalendarValue);
  };

  // Set Fasting Value
  const onSelectFasting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectFastingValue = event.target.value;
    console.log(selectFastingValue);
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

  // Get Locale
  const getLocale = (getLocaleIndex: number): string => {
    return locale[getLocaleIndex];
  };
  return (
    <>
      <div className="sticky top-0 w-full bg-primary text-primary-content">
        <div className="navbar bg-primary">
          <div className="navbar-start">
            <Drawer
              defaultCalendarValue={selectCalendar}
              defaultFastingValue={selectFasting}
              onSelectCalendar={onSelectCalendar}
              onSelectFasting={onSelectFasting}
            />
          </div>

          <div className="navbar-center">
            <Button onClick={decreaseMonth}>
              <img src="./img/chevron_left.svg" alt="chevron_left" />
            </Button>
            <Button styleBtn={{ minWidth: "117px" }} onClick={resetMonthYear}>
              {formatDate(getLocale(0), date, { showMonth: true })}
            </Button>
            <Button onClick={increaseMonth}>
              <img src="./img/chevron_right.svg" alt="chevron_right" />
            </Button>
            <Button onClick={decreaseYear}>
              <img src="./img/chevron_left.svg" alt="chevron_left" />
            </Button>
            <Button styleBtn={{ minWidth: "51px" }} onClick={resetMonthYear}>
              {formatDate(getLocale(0), date, { showYear: true })}
            </Button>
            <Button onClick={increaseYear}>
              <img src="./img/chevron_right.svg" alt="chevron_right" />
            </Button>
          </div>

          <div className="navbar-end">
            <Paschalion
              yearValue={formatDate(getLocale(0), date, { showYear: true })}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
