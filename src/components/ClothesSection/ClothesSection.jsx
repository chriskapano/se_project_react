import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ onCardClick, clothingItems, weatherData }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__your-items">Your items</p>
        <button className="clothes-section__button">+ Add New</button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
