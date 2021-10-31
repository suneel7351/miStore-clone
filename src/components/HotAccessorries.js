import React from "react";
import HotItemCard from "./HotItemCard.js";
import "../style/HotAccessorries.css";

function HotAccessorries({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) {
  return (
    <>
      <div className="hotAccessorries ">
        <div className="hotAccessorriesCover">
          <img
            src={
              musicCover ||
              smartDeviceCover ||
              homeCover ||
              lifeStyleCover ||
              mobileAccessoriesCover
            }
            alt=""
          />
        </div>
        <div>
          {" "}
          {music &&
            music.map((item, index) => {
              return (
                <HotItemCard
                  key={item.image}
                  name={item.name}
                  price={item.price}
                  index={index}
                  image={item.image}
                />
              );
            })}
          {smartDevice &&
            smartDevice.map((item, index) => {
              return (
                <HotItemCard
                  key={item.image}
                  name={item.name}
                  price={item.price}
                  index={index}
                  image={item.image}
                />
              );
            })}
          {home &&
            home.map((item, index) => {
              return (
                <HotItemCard
                  key={item.image}
                  name={item.name}
                  price={item.price}
                  index={index}
                  image={item.image}
                />
              );
            })}
          {lifeStyle &&
            lifeStyle.map((item, index) => {
              return (
                <HotItemCard
                  key={item.image}
                  name={item.name}
                  price={item.price}
                  index={index}
                  image={item.image}
                />
              );
            })}
          {mobileAccessories &&
            mobileAccessories.map((item, index) => {
              return (
                <HotItemCard
                  key={item.image}
                  name={item.name}
                  price={item.price}
                  index={index}
                  image={item.image}
                />
              );
            })}
          <HotItemCard
            image
            src="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default HotAccessorries;
