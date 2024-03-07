import warningEn from "../assets/lang/en/others/warning.json";
import warningRo from "../assets/lang/ro/others/warning.json";
import warningEl from "../assets/lang/el/others/warning.json";

interface Props {
  selectLanguage: string;
}

const WarningYearsInterval = ({ selectLanguage }: Props) => {
  // Get Warning
  const getWarning =
    selectLanguage === "ro"
      ? warningRo[0]
      : selectLanguage === "el"
      ? warningEl[0]
      : warningEn[0];
  return (
    <div className="p-4 text-red-300 text-sm lg:text-base font-bold">
      <p className="pb-4 flex justify-center">
        <img src="./img/warning.svg" alt="warning" />
      </p>
      <p className="flex justify-center">{getWarning}</p>
    </div>
  );
};

export default WarningYearsInterval;
