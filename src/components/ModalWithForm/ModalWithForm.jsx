import "./ModalWithForm.css";
import GreyCloseButton from "../../assets/GreyCloseButton.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  className = "",
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className={`modal__content ${className}`}>
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={GreyCloseButton}
            alt="Close"
            className="modal__close-icon"
          />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
