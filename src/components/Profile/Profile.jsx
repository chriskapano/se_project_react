import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleCardClick,
  clothingItems,
  weatherData,
  onAddNewClick,
}) {
  return (
    <>
      <div className="profile">
        <section className="profile__sidebar">
          <SideBar />
        </section>
        <section className="profile__clothing-items">
          <ClothesSection
            onCardClick={handleCardClick}
            clothingItems={clothingItems}
            weatherData={weatherData}
            onAddNewClick={onAddNewClick}
          />
        </section>
      </div>
    </>
  );
}

export default Profile;
