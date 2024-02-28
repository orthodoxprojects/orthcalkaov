import calabbrEn from "../assets/lang/en/others/calabbr.json";
import calabbrRo from "../assets/lang/ro/others/calabbr.json";
import calabbrEl from "../assets/lang/el/others/calabbr.json";

interface Props {
  selectLanguage: string;
  selectCalendar: string;
}

const CalAbbr = ({ selectLanguage, selectCalendar }: Props) => {
  // Get Calendar Abbreviations
  const calabbrOld =
    selectLanguage === "ro"
      ? calabbrRo[0]
      : selectLanguage === "el"
      ? calabbrEl[0]
      : calabbrEn[0];
  const calabbrNew =
    selectLanguage === "ro"
      ? calabbrRo[1]
      : selectLanguage === "el"
      ? calabbrEl[1]
      : calabbrEn[1];
  return <>{selectCalendar === "new" ? calabbrOld : calabbrNew}</>;
};

export default CalAbbr;
