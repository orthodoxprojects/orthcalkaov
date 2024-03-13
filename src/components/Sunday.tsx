import sundayEn from "../assets/lang/en/others/sunday.json";
import sundayRo from "../assets/lang/ro/others/sunday.json";
import sundayEl from "../assets/lang/el/others/sunday.json";

interface Props {
  selectLanguage: string;
  selectCalendar: string;
  date: Date;
  day: number;
}

const Sunday = ({ selectLanguage, selectCalendar, date, day }: Props) => {
  // Get Sunday
  const getSunday0 =
    selectLanguage === "ro"
      ? sundayRo[0]
      : selectLanguage === "el"
      ? sundayEl[0]
      : sundayEn[0];
  const getSunday1 =
    selectLanguage === "ro"
      ? sundayRo[1]
      : selectLanguage === "el"
      ? sundayEl[1]
      : sundayEn[1];
  const getSunday2 =
    selectLanguage === "ro"
      ? sundayRo[2]
      : selectLanguage === "el"
      ? sundayEl[2]
      : sundayEn[2];
  const getSunday3 =
    selectLanguage === "ro"
      ? sundayRo[3]
      : selectLanguage === "el"
      ? sundayEl[3]
      : sundayEn[3];
  return (
    <>
      {(selectCalendar === "new" &&
        new Date(date.getFullYear(), date.getMonth(), day).getDay() === 0) ||
      (selectCalendar === "old" &&
        new Date(date.getFullYear(), date.getMonth(), day).getDay() === 1) ? (
        <div className="mt-2 pt-2 border-t-[1px] border-stone-300">
          <span className="text-stone-200 text-sm lg:text-xl font-bold">
            {getSunday0}:{" "}
          </span>
          <span className="text-stone-300 text-sm lg:text-xl">
            TO IMPLEMENT{" "}
          </span>
          <span className="text-stone-200 text-sm lg:text-xl font-bold">
            {getSunday1}:{" "}
          </span>
          <span className="text-stone-300 text-sm lg:text-xl">
            TO IMPLEMENT{" "}
          </span>
          <span className="text-stone-200 text-sm lg:text-xl font-bold">
            {getSunday2}:{" "}
          </span>
          <span className="text-stone-300 text-sm lg:text-xl">
            TO IMPLEMENT{" "}
          </span>
          <span className="text-stone-200 text-sm lg:text-xl font-bold">
            {getSunday3}:{" "}
          </span>
          <span className="text-stone-300 text-sm lg:text-xl">
            TO IMPLEMENT{" "}
          </span>
        </div>
      ) : null}
    </>
  );
};

export default Sunday;
