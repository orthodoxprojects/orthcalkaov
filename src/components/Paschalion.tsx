import paschalion from "../assets/lang/others/paschalion.json";

interface Props {
  yearValue: string;
}

const Paschalion = ({ yearValue }: Props) => {
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
            {paschalion[0]} {yearValue}
          </h3>
          <p className="py-4">TO IMPLEMENT</p>
        </div>
      </dialog>
    </>
  );
};

export default Paschalion;
