import januaryDataEn from "../assets/lang/en/feasts/fixed/january.json";
import februaryDataEn from "../assets/lang/en/feasts/fixed/february.json";
import marchDataEn from "../assets/lang/en/feasts/fixed/march.json";
import aprilDataEn from "../assets/lang/en/feasts/fixed/april.json";
import mayDataEn from "../assets/lang/en/feasts/fixed/may.json";
import juneDataEn from "../assets/lang/en/feasts/fixed/june.json";
import julyDataEn from "../assets/lang/en/feasts/fixed/july.json";
import augustDataEn from "../assets/lang/en/feasts/fixed/august.json";
import septemberDataEn from "../assets/lang/en/feasts/fixed/september.json";
import octoberDataEn from "../assets/lang/en/feasts/fixed/october.json";
import novemberDataEn from "../assets/lang/en/feasts/fixed/november.json";
import decemberDataEn from "../assets/lang/en/feasts/fixed/december.json";

import januaryDataRo from "../assets/lang/ro/feasts/fixed/january.json";
import februaryDataRo from "../assets/lang/ro/feasts/fixed/february.json";
import marchDataRo from "../assets/lang/ro/feasts/fixed/march.json";
import aprilDataRo from "../assets/lang/ro/feasts/fixed/april.json";
import mayDataRo from "../assets/lang/ro/feasts/fixed/may.json";
import juneDataRo from "../assets/lang/ro/feasts/fixed/june.json";
import julyDataRo from "../assets/lang/ro/feasts/fixed/july.json";
import augustDataRo from "../assets/lang/ro/feasts/fixed/august.json";
import septemberDataRo from "../assets/lang/ro/feasts/fixed/september.json";
import octoberDataRo from "../assets/lang/ro/feasts/fixed/october.json";
import novemberDataRo from "../assets/lang/ro/feasts/fixed/november.json";
import decemberDataRo from "../assets/lang/ro/feasts/fixed/december.json";

import januaryDataEl from "../assets/lang/el/feasts/fixed/january.json";
import februaryDataEl from "../assets/lang/el/feasts/fixed/february.json";
import marchDataEl from "../assets/lang/el/feasts/fixed/march.json";
import aprilDataEl from "../assets/lang/el/feasts/fixed/april.json";
import mayDataEl from "../assets/lang/el/feasts/fixed/may.json";
import juneDataEl from "../assets/lang/el/feasts/fixed/june.json";
import julyDataEl from "../assets/lang/el/feasts/fixed/july.json";
import augustDataEl from "../assets/lang/el/feasts/fixed/august.json";
import septemberDataEl from "../assets/lang/el/feasts/fixed/september.json";
import octoberDataEl from "../assets/lang/el/feasts/fixed/october.json";
import novemberDataEl from "../assets/lang/el/feasts/fixed/november.json";
import decemberDataEl from "../assets/lang/el/feasts/fixed/december.json";

interface Props {
  selectLanguage: string;
  getMonthIndex: number;
  getDayIndex: string;
  selectCalendar: string;
}

const FeastsFixed = ({
  selectLanguage,
  getMonthIndex,
  getDayIndex,
  selectCalendar,
}: Props) => {
  // Month Array
  const setMonthIndex: any =
    selectLanguage === "ro"
      ? [
          januaryDataRo,
          februaryDataRo,
          marchDataRo,
          aprilDataRo,
          mayDataRo,
          juneDataRo,
          julyDataRo,
          augustDataRo,
          septemberDataRo,
          octoberDataRo,
          novemberDataRo,
          decemberDataRo,
        ]
      : selectLanguage === "el"
      ? [
          januaryDataEl,
          februaryDataEl,
          marchDataEl,
          aprilDataEl,
          mayDataEl,
          juneDataEl,
          julyDataEl,
          augustDataEl,
          septemberDataEl,
          octoberDataEl,
          novemberDataEl,
          decemberDataEl,
        ]
      : [
          januaryDataEn,
          februaryDataEn,
          marchDataEn,
          aprilDataEn,
          mayDataEn,
          juneDataEn,
          julyDataEn,
          augustDataEn,
          septemberDataEn,
          octoberDataEn,
          novemberDataEn,
          decemberDataEn,
        ];

  // Fixed Feast Day
  const setDayIndex = setMonthIndex[getMonthIndex][getDayIndex];
  return (
    <>
      {setDayIndex.map((month: any, key: number) => (
        <span key={key}>
          <span className="text-red-300 text-sm lg:text-xl font-bold">
            {month["primaryBoth"]}{" "}
          </span>
          <span className="text-stone-200 text-sm lg:text-xl font-bold">
            {month["secondaryBoth"]}{" "}
          </span>
          <span className="text-stone-300 text-sm lg:text-xl">
            {month["defaultBoth"]}{" "}
          </span>
          <span className="text-red-300 text-sm lg:text-xl font-bold">
            {selectCalendar === "old" && month["primaryOld"]}{" "}
          </span>
          <span className="text-stone-200 text-sm lg:text-xl font-bold">
            {selectCalendar === "old" && month["secondaryOld"]}{" "}
          </span>
          <span className="text-stone-300 text-sm lg:text-xl">
            {selectCalendar === "old" && month["defaultOld"]}{" "}
          </span>
          <span className="text-red-300 text-sm lg:text-xl font-bold">
            {selectCalendar === "new" && month["primaryNew"]}{" "}
          </span>
          <span className="text-stone-200 text-sm lg:text-xl font-bold">
            {selectCalendar === "new" && month["secondaryNew"]}{" "}
          </span>
          <span className="text-stone-300 text-sm lg:text-xl">
            {selectCalendar === "new" && month["defaultNew"]}{" "}
          </span>
        </span>
      ))}
    </>
  );
};

export default FeastsFixed;
