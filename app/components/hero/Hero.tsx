"use client"
import { useState } from "react";
import HeroSportComponent from "./HeroSportComponent";

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <ul className="flex">
      <HeroSportComponent
        isHovered={hoveredIndex === 0}
        onMouseEnter={() => setHoveredIndex(0)}
        sport="soccer"
        background="/soccer.svg"
      />
      <HeroSportComponent
        isHovered={hoveredIndex === 1}
        onMouseEnter={() => setHoveredIndex(1)}
        sport={"baseball-softball"}
        background="/baseball.svg"
      />
      <HeroSportComponent
        isHovered={hoveredIndex === 2}
        onMouseEnter={() => setHoveredIndex(2)}
        sport="field-hockey"
        background="/fieldhockey.svg"
      />
    </ul>
  );
}
