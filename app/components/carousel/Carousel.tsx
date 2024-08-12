import Image from "next/image";
import Styles from "./carousel.module.css";
import { ar } from "../../lib/fonts"

interface Icons {
  src: string;
  p: string;
  alt: string;
}

export default function Carousel() {
  const iconArray: Icons[] = [
    {
      src: "/soccerball-icon.svg",
      p: "25 Quality Fields",
      alt: "Soccer ball icon",
    },
    {
      src: "/silverware-icon.svg",
      p: "5-Star Concessions",
      alt: "Silverware icon signifying concession stands",
    },
    {
      src: "/floodlights-icon.svg",
      p: "Night games",
      alt: "Floodlight icon signifying night games can be played",
    },
    {
      src: "/cloud.svg",
      p: "Less cancellations",
      alt: "Rain cloud icon signifying less cancellations will be made due to privately owned fields",
    },
    {
      src: "/scholarships.svg",
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
    <div className={`${ar.className} flex w-9/12 mx-auto justify-evenly my-24 overflow-hidden`}>
      <div className={Styles["carousel-content"]}>
        {iconArray.map((icon, index) => {
          return (
            <div key={index} className={Styles["icon-wrapper"]}>
              <Image
                src={icon.src}
                alt={icon.alt}
                height={150}
                width={150}
                className="mx-auto h-[150px]"
              />
              <p className="text-3xl text-center font-bold">{icon.p}</p>
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
                className="mx-auto h-[150px]"
              />
              <p className="text-3xl text-center font-bold">{icon.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
