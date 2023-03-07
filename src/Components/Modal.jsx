const Modal = (props) => {
  return props.trigger ? (
    <div className="modal-wrap">
      <div className="modal-text">
        <p>{props.modalText}</p>
      </div>
      <button className="modal-close"></button>
    </div>
  ) : (
    ""
  );
};

export default Modal;
