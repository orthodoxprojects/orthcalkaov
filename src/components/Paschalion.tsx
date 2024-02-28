import paschalionEn from "../assets/lang/en/others/paschalion.json";
import paschalionRo from "../assets/lang/ro/others/paschalion.json";
import paschalionEl from "../assets/lang/el/others/paschalion.json";

interface Props {
  selectLanguage: string;
  yearValue: string;
}

const Paschalion = ({ selectLanguage, yearValue }: Props) => {
  // Get Paschalion
  const getPaschalion =
    selectLanguage === "ro"
      ? paschalionRo[0]
      : selectLanguage === "el"
      ? paschalionEl[0]
      : paschalionEn[0];
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
        <div className="modal-box bg-[#a89894] text-stone-950">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            {getPaschalion} {yearValue}
          </h3>
          <p className="py-4">TO IMPLEMENT</p>
        </div>
      </dialog>
    </>
  );
};

export default Paschalion;
