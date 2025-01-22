import React, { useEffect, useState } from "react";
import sun from "../assets/icons/sun.gif";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import pinwheel from "../assets/icons/pinwheel.gif";
import snow from "../assets/icons/snow.png";
import rain from "../assets/icons/rain.gif";
import stormy from "../assets/icons/Stormy.jpg";

const MiniCard = ({time, temp, iconString}) => {
  const [icon, setIcon] = useState();
  useEffect(() => {
    if (iconString) {
      if ((iconString.toLowerCase().includes("cloud"))) setIcon(cloud);
      else if (iconString.toLowerCase().includes("rain")) setIcon(rain);
      else if (iconString.toLowerCase().includes("snow")) setIcon(snow);
      else if (iconString.toLowerCase().includes("clear")) setIcon(sun);
      else if (iconString.toLowerCase().includes("fog")) setIcon(fog);
      else if (iconString.toLowerCase().includes("wind")) setIcon(pinwheel);
      else if (iconString.toLowerCase().includes("thunder")) setIcon(stormy);
    }
  }, [iconString]);

  return (
    <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col">
      <p className="text-center">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" }).split(" ")[0]
        }
      </p>
      <hr />

      <div className="w-full flex justify-center items-center flex-1">
        <img src={icon} alt="" className="w-[4rem] h-[4rem]" />
      </div>

      <p className="text-center font-bold">{temp}&deg;C</p>
    </div>
  );
};

export default MiniCard;
