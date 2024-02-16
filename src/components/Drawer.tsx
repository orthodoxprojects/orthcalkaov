import calendar from "../assets/lang/others/calendar.json";
import fating from "../assets/lang/others/fasting.json";

interface Props {
  defaultCalendarValue: string;
  defaultFastingValue: string;
  onSelectCalendar: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelectFasting: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Drawer = ({
  defaultCalendarValue,
  defaultFastingValue,
  onSelectCalendar,
  onSelectFasting,
}: Props) => {
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
          <div className="menu p-4 w-80 min-h-full bg-[#a89894] text-stone-950">
            {/* Sidebar content here */}
            <p className="p-4 font-bold">{calendar[0]}</p>
            <select
              className="select select-bordered w-full max-w-xs bg-stone-400 text-stone-950"
              id="selectCalendar"
              defaultValue={defaultCalendarValue}
              onChange={onSelectCalendar}
            >
              <option value="old">{calendar[1]}</option>
              <option value="new">{calendar[2]}</option>
            </select>
            <p className="p-4 font-bold">{fating[0]}</p>
            <select
              className="select select-bordered w-full max-w-xs bg-stone-400 text-stone-950"
              id="selectFasting"
              defaultValue={defaultFastingValue}
              onChange={onSelectFasting}
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
