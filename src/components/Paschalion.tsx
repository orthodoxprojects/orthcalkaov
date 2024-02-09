const Paschalion = () => {
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
        <div className="modal-box bg-primary">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Paschalion</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default Paschalion;
