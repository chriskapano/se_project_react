import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div>
        <p>Your items</p>
        <button>+ Add New</button>
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
