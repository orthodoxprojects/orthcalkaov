import languageEn from "../assets/lang/en/others/language.json";
import calendarEn from "../assets/lang/en/others/calendar.json";
import fastingEn from "../assets/lang/en/others/fasting.json";
import languageRo from "../assets/lang/ro/others/language.json";
import calendarRo from "../assets/lang/ro/others/calendar.json";
import fastingRo from "../assets/lang/ro/others/fasting.json";
import languageEl from "../assets/lang/el/others/language.json";
import calendarEl from "../assets/lang/el/others/calendar.json";
import fastingEl from "../assets/lang/el/others/fasting.json";

interface Props {
  selectLanguage: string;
  defaultLanguageValue: string;
  defaultCalendarValue: string;
  defaultFastingValue: string;
  onSelectLanguage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelectCalendar: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelectFasting: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Drawer = ({
  selectLanguage,
  defaultLanguageValue,
  defaultCalendarValue,
  defaultFastingValue,
  onSelectLanguage,
  onSelectCalendar,
  onSelectFasting,
}: Props) => {
  // Get Language
  const getLanguage0 =
    selectLanguage === "ro"
      ? languageRo[0]
      : selectLanguage === "el"
      ? languageEl[0]
      : languageEn[0];
  const getLanguage1 =
    selectLanguage === "ro"
      ? languageRo[1]
      : selectLanguage === "el"
      ? languageEl[1]
      : languageEn[1];
  const getLanguage2 =
    selectLanguage === "ro"
      ? languageRo[2]
      : selectLanguage === "el"
      ? languageEl[2]
      : languageEn[2];
  const getLanguage3 =
    selectLanguage === "ro"
      ? languageRo[3]
      : selectLanguage === "el"
      ? languageEl[3]
      : languageEn[3];

  // Get Calendar
  const getCalendar0 =
    selectLanguage === "ro"
      ? calendarRo[0]
      : selectLanguage === "el"
      ? calendarEl[0]
      : calendarEn[0];
  const getCalendar1 =
    selectLanguage === "ro"
      ? calendarRo[1]
      : selectLanguage === "el"
      ? calendarEl[1]
      : calendarEn[1];
  const getCalendar2 =
    selectLanguage === "ro"
      ? calendarRo[2]
      : selectLanguage === "el"
      ? calendarEl[2]
      : calendarEn[2];

  // Get Fasting
  const getFasting0 =
    selectLanguage === "ro"
      ? fastingRo[0]
      : selectLanguage === "el"
      ? fastingEl[0]
      : fastingEn[0];
  const getFasting1 =
    selectLanguage === "ro"
      ? fastingRo[1]
      : selectLanguage === "el"
      ? fastingEl[1]
      : fastingEn[1];
  const getFasting2 =
    selectLanguage === "ro"
      ? fastingRo[2]
      : selectLanguage === "el"
      ? fastingEl[2]
      : fastingEn[2];
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
            <p className="p-4 font-bold">{getLanguage0}</p>
            <select
              className="select select-bordered w-full max-w-xs bg-stone-400 text-stone-950"
              id="selectLanguage"
              defaultValue={defaultLanguageValue}
              onChange={onSelectLanguage}
            >
              <option value="en">{getLanguage1}</option>
              <option value="ro">{getLanguage2}</option>
              <option value="el">{getLanguage3}</option>
            </select>
            <p className="p-4 font-bold">{getCalendar0}</p>
            <select
              className="select select-bordered w-full max-w-xs bg-stone-400 text-stone-950"
              id="selectCalendar"
              defaultValue={defaultCalendarValue}
              onChange={onSelectCalendar}
            >
              <option value="old">{getCalendar1}</option>
              <option value="new">{getCalendar2}</option>
            </select>
            <p className="p-4 font-bold">{getFasting0}</p>
            <select
              className="select select-bordered w-full max-w-xs bg-stone-400 text-stone-950"
              id="selectFasting"
              defaultValue={defaultFastingValue}
              onChange={onSelectFasting}
            >
              <option value="layman">{getFasting1}</option>
              <option value="monk">{getFasting2}</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
