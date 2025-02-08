import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ handleCardClick, clothingItems, weatherData }) {
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
          />
        </section>
      </div>
    </>
  );
}

export default Profile;
