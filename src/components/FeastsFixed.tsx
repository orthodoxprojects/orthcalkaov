import januaryData from "../assets/lang/ro/feasts/fixed/january.json";
import februaryData from "../assets/lang/ro/feasts/fixed/february.json";
import marchData from "../assets/lang/ro/feasts/fixed/march.json";
import aprilData from "../assets/lang/ro/feasts/fixed/april.json";
import mayData from "../assets/lang/ro/feasts/fixed/may.json";
import juneData from "../assets/lang/ro/feasts/fixed/june.json";
import julyData from "../assets/lang/ro/feasts/fixed/july.json";
import augustData from "../assets/lang/ro/feasts/fixed/august.json";
import septemberData from "../assets/lang/ro/feasts/fixed/september.json";
import octoberData from "../assets/lang/ro/feasts/fixed/october.json";
import novemberData from "../assets/lang/ro/feasts/fixed/november.json";
import decemberData from "../assets/lang/ro/feasts/fixed/december.json";

interface Props {
  getMonthIndex: number;
  getDayIndex: string;
  selectCalendar: string;
}

const FeastsFixed = ({ getMonthIndex, getDayIndex, selectCalendar }: Props) => {
  // Month Array
  const setMonthIndex: any = [
    januaryData,
    februaryData,
    marchData,
    aprilData,
    mayData,
    juneData,
    julyData,
    augustData,
    septemberData,
    octoberData,
    novemberData,
    decemberData,
  ];

  // Fixed Feast Day
  const setDayIndex = setMonthIndex[getMonthIndex][getDayIndex];
  return (
    <>
      {setDayIndex.map((month: any, key: number) => (
        <div key={key}>
          <p className="text-red-300 text-sm lg:text-base font-bold">
            {month["primaryBoth"]}
          </p>
          <p className="text-stone-200 text-sm lg:text-base font-bold">
            {month["secondaryBoth"]}
          </p>
          <p className="text-stone-300 text-sm lg:text-base">
            {month["defaultBoth"]}
          </p>
          <p className="text-red-300 text-sm lg:text-base font-bold">
            {selectCalendar === "old" && month["primaryOld"]}
          </p>
          <p className="text-stone-200 text-sm lg:text-base font-bold">
            {selectCalendar === "old" && month["secondaryOld"]}
          </p>
          <p className="text-stone-300 text-sm lg:text-base">
            {selectCalendar === "old" && month["defaultOld"]}
          </p>
          <p className="text-red-300 text-sm lg:text-base font-bold">
            {selectCalendar === "new" && month["primaryNew"]}
          </p>
          <p className="text-stone-200 text-sm lg:text-base font-bold">
            {selectCalendar === "new" && month["secondaryNew"]}
          </p>
          <p className="text-stone-300 text-sm lg:text-base">
            {selectCalendar === "new" && month["defaultNew"]}
          </p>
        </div>
      ))}
    </>
  );
};

export default FeastsFixed;
