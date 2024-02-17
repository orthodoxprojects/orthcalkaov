import januaryData from "../assets/lang/feasts/fixed/january.json";
import februaryData from "../assets/lang/feasts/fixed/february.json";
import marchData from "../assets/lang/feasts/fixed/march.json";
import aprilData from "../assets/lang/feasts/fixed/april.json";
import mayData from "../assets/lang/feasts/fixed/may.json";
import juneData from "../assets/lang/feasts/fixed/june.json";
import julyData from "../assets/lang/feasts/fixed/july.json";
import augustData from "../assets/lang/feasts/fixed/august.json";
import septemberData from "../assets/lang/feasts/fixed/september.json";
import octoberData from "../assets/lang/feasts/fixed/october.json";
import novemberData from "../assets/lang/feasts/fixed/november.json";
import decemberData from "../assets/lang/feasts/fixed/december.json";

interface Props {
  getMonthIndex: number;
  getDayIndex: string;
}

const FeastsFixed = ({ getMonthIndex, getDayIndex }: Props) => {
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
            {month["primaryOld"]}
          </p>
          <p className="text-stone-200 text-sm lg:text-base font-bold">
            {month["secondaryOld"]}
          </p>
          <p className="text-stone-300 text-sm lg:text-base">
            {month["defaultOld"]}
          </p>
          <p className="text-red-300 text-sm lg:text-base font-bold">
            {month["primaryNew"]}
          </p>
          <p className="text-stone-200 text-sm lg:text-base font-bold">
            {month["secondaryNew"]}
          </p>
          <p className="text-stone-300 text-sm lg:text-base">
            {month["defaultNew"]}
          </p>
        </div>
      ))}
    </>
  );
};

export default FeastsFixed;
