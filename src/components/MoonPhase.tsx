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
      <img src="./img/moonNew.svg" alt="moonNew" />
    ) : phase === "Waxing Crescent" ? (
      <img src="./img/moonWaxingCrescent.svg" alt="moonWaxingCrescent" />
    ) : phase === "First Quarter" ? (
      <img src="./img/moonFirstQuarter.svg" alt="moonFirstQuarter" />
    ) : phase === "Waxing Gibbous" ? (
      <img src="./img/moonWaxingGibbous.svg" alt="moonWaxingGibbous" />
    ) : phase === "Full" ? (
      <img src="./img/moonFull.svg" alt="moonFull" />
    ) : phase === "Waning Gibbous" ? (
      <img src="./img/moonWaningGibbous.svg" alt="moonWaningGibbous" />
    ) : phase === "Last Quarter" ? (
      <img src="./img/moonLastQuarter.svg" alt="moonLastQuarter" />
    ) : phase === "Waning Crescent" ? (
      <img src="./img/moonWaningCrescent.svg" alt="moonWaningCrescent" />
    ) : null;

  console.log(newDate, phase);
  return <div>{moonPhaseImg}</div>;
};

export default MoonPhase;
