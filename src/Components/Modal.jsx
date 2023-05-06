const Modal = (props) => {
  return props.modalActive ? (
    <div className="modal-wrap">
      <div className="modal-text">
        <p>{props.modalText}</p>
        <button
          className="modal-close"
          onClick={() => {
            props.setModalActive(false);
            props.setModalText("");
          }}
        >
          Click to close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
