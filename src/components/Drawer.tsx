import calendar from "../assets/lang/others/calendar.json";
import fating from "../assets/lang/others/fasting.json";

const Drawer = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-ghost p-0">
            <img src="./img/menu.svg" alt="menu" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <p className="p-4 font-bold">{calendar[0]}</p>
            <select
              className="select select-bordered w-full max-w-xs"
              id="selectCalendar"
              defaultValue={"new"}
            >
              <option value="old">{calendar[1]}</option>
              <option value="new">{calendar[2]}</option>
            </select>
            <p className="p-4 font-bold">{fating[0]}</p>
            <select
              className="select select-bordered w-full max-w-xs"
              id="selectFasting"
              defaultValue={"layman"}
            >
              <option value="layman">{fating[1]}</option>
              <option value="monk">{fating[2]}</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
