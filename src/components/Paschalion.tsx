import paschalionEn from "../assets/lang/en/others/paschalion.json";
import paschalionRo from "../assets/lang/ro/others/paschalion.json";
import paschalionEl from "../assets/lang/el/others/paschalion.json";
import { calculatePascha } from "../utils/paschaUtils";
import { increaseDateByDays, formatDate } from "../utils/dateUtils";

interface Props {
  selectLanguage: string;
  yearValue: string;
  selectCalendar: string;
  getLocale: string;
}

const Paschalion = ({
  selectLanguage,
  yearValue,
  selectCalendar,
  getLocale,
}: Props) => {
  // Get Paschalion
  const getPaschalion =
    selectLanguage === "ro"
      ? paschalionRo[0]
      : selectLanguage === "el"
      ? paschalionEl[0]
      : paschalionEn[0];

  // Get Paschalion Date
  const getPaschalionDate =
    selectCalendar === "old"
      ? calculatePascha(Number(yearValue))
      : increaseDateByDays(calculatePascha(Number(yearValue)), 13);
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-ghost text-xl p-0"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_3"
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        <img src="./img/egg.svg" alt="egg" />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-neutral-700 text-neutral-200">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg border-b-2 border-neutral-200">
            {getPaschalion} {yearValue}
          </h3>
          <p className="py-4">
            {formatDate(getLocale, getPaschalionDate, {
              showDay: true,
              showMonth: true,
            })}
          </p>
        </div>
      </dialog>
    </>
  );
};

export default Paschalion;
