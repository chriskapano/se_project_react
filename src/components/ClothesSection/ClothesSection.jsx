import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div className="clothes-section__items">
        <p className="clothes-section__your-items">Your items</p>
        <button className="clothes-section__button">+ Add New</button>
      </div>
      <ul className="cards__list">
        {defaultClothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            // TODO - pass as prop
            // onCardClick={onCardClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
