import { Moon } from "lunarphase-js";
import { increaseDateByDays } from "../utils/dateUtils";

interface Props {
  date: Date;
  day: number;
  selectCalendar: string;
}

const MoonPhase = ({ date, day, selectCalendar }: Props) => {
  const newDate =
    selectCalendar === "new"
      ? new Date(date.getFullYear(), date.getMonth(), day)
      : increaseDateByDays(
          new Date(date.getFullYear(), date.getMonth(), day),
          13
        );

  const phase = Moon.lunarPhase(newDate);

  const moonPhaseImg =
    phase === "New" ? (
      <img
        src="./img/moonNew.svg"
        alt="moonNew"
        className="w-6 lg:w-8 h-6 lg:h-8"
      />
    ) : phase === "Waxing Crescent" ? (
      <img
        src="./img/moonWaxingCrescent.svg"
        alt="moonWaxingCrescent"
        className="w-6 lg:w-8 h-6 lg:h-8"
      />
    ) : phase === "First Quarter" ? (
      <img
        src="./img/moonFirstQuarter.svg"
        alt="moonFirstQuarter"
        className="w-6 lg:w-8 h-6 lg:h-8"
      />
    ) : phase === "Waxing Gibbous" ? (
      <img
        src="./img/moonWaxingGibbous.svg"
        alt="moonWaxingGibbous"
        className="w-6 lg:w-8 h-6 lg:h-8"
      />
    ) : phase === "Full" ? (
      <img
        src="./img/moonFull.svg"
        alt="moonFull"
        className="w-6 lg:w-8 h-6 lg:h-8"
      />
    ) : phase === "Waning Gibbous" ? (
      <img
        src="./img/moonWaningGibbous.svg"
        alt="moonWaningGibbous"
        className="w-6 lg:w-8 h-6 lg:h-8"
      />
    ) : phase === "Last Quarter" ? (
      <img
        src="./img/moonLastQuarter.svg"
        alt="moonLastQuarter"
        className="w-6 lg:w-8 h-6 lg:h-8"
      />
    ) : phase === "Waning Crescent" ? (
      <img
        src="./img/moonWaningCrescent.svg"
        alt="moonWaningCrescent"
        className="w-6 lg:w-8 h-6 lg:h-8"
      />
    ) : null;

  return <div>{moonPhaseImg}</div>;
};

export default MoonPhase;
