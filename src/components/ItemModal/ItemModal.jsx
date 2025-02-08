import "./ItemModal.css";
import WhiteCloseButton from "../../assets/WhiteCloseButton.svg";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={WhiteCloseButton} alt="Close" />
        </button>
        <img src={card.link} alt="Card Image" className="modal__image" />
        <div className="modal__footer">
          <div className="modal__top-line">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              className="modal__delete-button"
              onClick={() => onDelete(card._id)}
            >
              Delete item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
