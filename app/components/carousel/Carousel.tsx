import Image from "next/image";
import Styles from "./carousel.module.css";
import { ar } from "../lib/fonts"

interface Icons {
  src: string;
  p: string;
  alt: string;
}

export default function Carousel() {
  const iconArray: Icons[] = [
    {
      src: "/soccerBall.svg",
      p: "25 Quality Fields",
      alt: "Soccer ball icon",
    },
    {
      src: "/Cutlery.svg",
      p: "5-Star Concessions",
      alt: "Silverware icon signifying concession stands",
    },
    {
      src: "/Stadium.svg",
      p: "Night games",
      alt: "Floodlight icon signifying night games can be played",
    },
    {
      src: "/Storm.svg",
      p: "Less cancellations",
      alt: "Rain cloud icon signifying less cancellations will be made due to privately owned fields",
    },
    {
      src: "/Graduation-hat.svg",
      p: "Scholarships for Seniors",
      alt: "Graduate cap icon signifying scholarships can be awarded to seniors",
    },
    {
      src: "/parking.svg",
      p: "Lots of Parking",
      alt: "A parking sign with a parked car next to it, signifying that SYAA has a lot of parking spots available.",
    },
  ];

  return (
    <div className={`${ar.className} flex m-4 lg:w-10/12 lg:mx-auto my-24 overflow-hidden`}>
      <div className={Styles["carousel-content"]}>
        {iconArray.map((icon, index) => {
          return (
            <div key={index} className={Styles["icon-wrapper"]}>
              <Image
                src={icon.src}
                alt={icon.alt}
                height={150}
                width={150}
                className="mx-auto w-[150px] h-[150px]"
              />
              <p className="lg:text-3xl text-xl text-center font-bold">{icon.p}</p>
            </div>
          );
        })}
        {iconArray.map((icon, index) => {
          return (
            <div key={index} className={Styles["icon-wrapper"]}>
              <Image
                src={icon.src}
                alt={icon.alt}
                height={150}
                width={150}
                className="mx-auto w-[150px] h-[150px]"
              />
              <p className="text-xl lg:text-3xl text-center font-bold">{icon.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
