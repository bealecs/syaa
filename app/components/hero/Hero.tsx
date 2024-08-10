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
        sport="Soccer"
        background="/soccer.svg"
      />
      <HeroSportComponent
        isHovered={hoveredIndex === 1}
        onMouseEnter={() => setHoveredIndex(1)}
        sport={"Baseball/Softball"}
        background="/baseball.svg"
      />
      <HeroSportComponent
        isHovered={hoveredIndex === 2}
        onMouseEnter={() => setHoveredIndex(2)}
        sport="Field Hockey"
        background="/fieldhockey.svg"
      />
    </ul>
  );
}
