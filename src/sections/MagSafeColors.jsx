import { useState } from "react";
import ColorPicker from "../components/ColorPicker";
import SpaceGraySide from "/assets/images/design_side_spacegray_large.jpg";
import SilverSide from "/assets/images/design_side_silver_large.jpg";
import MidnightSide from "/assets/images/design_side_midnight_large.jpg";
import StarlightSide from "/assets/images/design_side_starlight_large.jpg";
import SpaceGrayTop from "/assets/images/design_top_spacegray_large.jpg";
import SilverTop from "/assets/images/design_top_silver_large.jpg";
import MidnightTop from "/assets/images/design_top_midnight_large.jpg";
import StarlightTop from "/assets/images/design_top_starlight_large.jpg";
import SpaceGrayMagsafe from "/assets/images/design_magsafe_spacegray_large.jpg";
import SilverMagsafe from "/assets/images/design_magsafe_silver_large.jpg";
import MidnightMagsafe from "/assets/images/design_magsafe_midnight_large.jpg";
import StarlightMagsafe from "/assets/images/design_magsafe_starlight_large.jpg";

const MagSafeColors = () => {
  const [activeColor, setActiveColor] = useState("Midnight");

  const colors = [
    {
      name: "Midnight",
      hexCode: "#2e3642",
      images: {
        top: MidnightTop,
        side: MidnightSide,
        magsafe: MidnightMagsafe,
      },
    },
    {
      name: "Starlight",
      hexCode: "#f0e4d3",
      images: {
        top: StarlightTop,
        side: StarlightSide,
        magsafe: StarlightMagsafe,
      },
    },
    {
      name: "Space Gray",
      hexCode: "#7d7e80",
      images: {
        top: SpaceGrayTop,
        side: SpaceGraySide,
        magsafe: SpaceGrayMagsafe,
      },
    },
    {
      name: "Silver",
      hexCode: "#e3e4e6",
      images: {
        top: SilverTop,
        side: SilverSide,
        magsafe: SilverMagsafe,
      },
    },
  ];

  const { top, side, magsafe } = colors.find(
    (color) => color.name === activeColor
  ).images;

  const handleColorChange = (color) => {
    setActiveColor(color);
  };

  return (
    <div className="w-full screen-max-width h-full mb-20">
      <div className="mt-20 flex gap-6 lg:h-[70vh] h-full">
        <div className="flex flex-col gap-6 items-center w-full">
          <div className="box flex items-center justify-center bg-[#fbfbfb] h-full w-full p-8 ">
            <img src={side} alt={`${activeColor} side image`} />
          </div>
          <div className="box flex items-center justify-center bg-[#fbfbfb] h-full w-full pt-8">
            <img src={magsafe} alt={`${activeColor} magsafe image`} />
          </div>
        </div>
        <div className="bg-[#fbfbfb] h-full w-full flex items-baseline pt-[4rem] justify-center relative">
          <img src={top} alt={`${activeColor} top image`} />
          <div className="absolute bottom-[1rem] right-0 flex justify-center align-baseline p-2 w-full">
            <ColorPicker
              colors={colors}
              activeColor={activeColor}
              onColorChange={handleColorChange}
            />
          </div>
        </div>
      </div>
      <p className="text-[#86868b] text-[21px] mt-10 font-semibold tracking-tight">
        <span className="text-[#1d1d1f]">Four stellar colors. </span> Your
        options are out of this world — and each one comes with a matching
        MagSafe charging cable.
      </p>
    </div>
  );
};

export default MagSafeColors;
