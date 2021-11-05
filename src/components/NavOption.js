import React, { useState, useEffect } from "react";
import "../style/NavOption.css";
import Navcard from "./Navcard.js";

function NavOption(
  {
    miphones,
    audio,
    home,
    accessories,
    redmiphones,
    tv,
    laptop,
    fitnessLifestyle,
  },
  props
) {
  const [miphoneToggle, setmiphoneToggle] = useState(false);
  const [redmiphoneToggle, setredmiphoneToggle] = useState(false);
  const [tvToggle, settvToggle] = useState(false);
  const [fitnessLifestyleToggle, setfitnessLifestyleToggle] = useState(false);
  const [homeToggle, sethomeToggle] = useState(false);
  const [audioToggle, setaudioToggle] = useState(false);
  const [accessoriesToggle, setaccessoriesToggle] = useState(false);
  const [laptopToggle, setlaptopToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones") {
      setmiphoneToggle(true);
    }
    if (window.location.pathname === "/redmiphones") {
      setredmiphoneToggle(true);
    }
    if (window.location.pathname === "/tv") {
      settvToggle(true);
    }
    if (window.location.pathname === "/fitnessLifestyle") {
      setfitnessLifestyleToggle(true);
    }
    if (window.location.pathname === "/home") {
      sethomeToggle(true);
    }
    if (window.location.pathname === "/audio") {
      setaudioToggle(true);
    }
    if (window.location.pathname === "/accessories") {
      setaccessoriesToggle(true);
    }
    if (window.location.pathname === "/laptop") {
      setlaptopToggle(true);
    }
  }, []);
  return (
    <>
      <div className="navOption">
        {miphoneToggle
          ? miphones.map((items, index) => {
              return (
                <Navcard
                  name={items.name}
                  image={items.image}
                  price={items.price}
                />
              );
            })
          : null}
        {redmiphoneToggle
          ? redmiphones.map((items, index) => {
              return (
                <Navcard
                  name={items.name}
                  image={items.image}
                  price={items.price}
                />
              );
            })
          : null}
        {tvToggle
          ? tv.map((items, index) => {
              return (
                <Navcard
                  name={items.name}
                  image={items.image}
                  price={items.price}
                />
              );
            })
          : null}
        {laptopToggle
          ? laptop.map((items, index) => {
              return (
                <Navcard
                  name={items.name}
                  image={items.image}
                  price={items.price}
                />
              );
            })
          : null}
        {homeToggle
          ? home.map((items, index) => {
              return (
                <Navcard
                  name={items.name}
                  image={items.image}
                  price={items.price}
                />
              );
            })
          : null}
        {audioToggle
          ? audio.map((items, index) => {
              return (
                <Navcard
                  name={items.name}
                  image={items.image}
                  price={items.price}
                />
              );
            })
          : null}
        {accessoriesToggle
          ? accessories.map((items, index) => {
              return (
                <Navcard
                  name={items.name}
                  image={items.image}
                  price={items.price}
                />
              );
            })
          : null}
        {fitnessLifestyleToggle
          ? fitnessLifestyle.map((items, index) => {
              return (
                <Navcard
                  name={items.name}
                  image={items.image}
                  price={items.price}
                />
              );
            })
          : null}
      </div>
    </>
  );
}

export default NavOption;
