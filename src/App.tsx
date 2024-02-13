import React, { useEffect, useState } from "react";
import {
  getCookie,
  setCookie,
  updateCookieExpiration,
} from "./utils/cookieUtils";
import months from "./assets/lang/others/months.json";
import Drawer from "./components/Drawer";
import Button from "./components/Button";
import Paschalion from "./components/Paschalion";

function App() {
  // Retrieve from cookies if available
  const initialSelectCalendar = getCookie("selectCalendar");
  const initialSelectFasting = getCookie("selectFasting");

  // Set state to the cookie value if available, otherwise to default
  const [selectCalendar, setSelectCalendar] = useState<string>(
    initialSelectCalendar ? initialSelectCalendar : "new"
  );
  const [selectFasting, setSelectFasting] = useState<string>(
    initialSelectFasting ? initialSelectFasting : "layman"
  );

  const onSelectCalendar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectCalendarValue = event.target.value;
    console.log(selectCalendarValue);
    setSelectCalendar(selectCalendarValue);
    setCookie("selectCalendar", selectCalendarValue);
  };

  const onSelectFasting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectFastingValue = event.target.value;
    console.log(selectFastingValue);
    setSelectFasting(selectFastingValue);
    setCookie("selectFasting", selectFastingValue);
  };

  const getMonthName = (monthIndex: number): string => {
    return months[monthIndex];
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
            <Button onClick={() => console.log("Clicked")}>
              <img src="./img/chevron_left.svg" alt="chevron_left" />
            </Button>
            <Button onClick={() => console.log("Clicked")}>
              {getMonthName(0)}
            </Button>
            <Button onClick={() => console.log("Clicked")}>
              <img src="./img/chevron_right.svg" alt="chevron_right" />
            </Button>
            <Button onClick={() => console.log("Clicked")}>
              <img src="./img/chevron_left.svg" alt="chevron_left" />
            </Button>
            <Button onClick={() => console.log("Clicked")}>Year</Button>
            <Button onClick={() => console.log("Clicked")}>
              <img src="./img/chevron_right.svg" alt="chevron_right" />
            </Button>
          </div>

          <div className="navbar-end">
            <Paschalion />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
