import Styles from "./carousel.module.css";
import { ar } from "../lib/fonts"
import Soccerball from "../lib/svg-components/Soccerball";
import Cutlery from "../lib/svg-components/Cutlery";
import ScholarshipSVG from "../lib/svg-components/ScholarshipSVG";
import Storm from "../lib/svg-components/Storm";
import Stadium from "../lib/svg-components/Stadium";
import Parking from "../lib/svg-components/Parking";

interface Icons {
  src: React.ReactNode;
  p: string;
  alt: string;
}

export default function Carousel() {
  const iconArray: Icons[] = [
    {
      src: <Soccerball />,
      p: "25 Quality Fields",
      alt: "Soccer ball icon",
    },
    {
      src: <Cutlery />,
      p: "5-Star Concessions",
      alt: "Silverware icon signifying concession stands",
    },
    {
      src: <Stadium />,
      p: "Night games",
      alt: "Floodlight icon signifying night games can be played",
    },
    {
      src: <Storm />,
      p: "Less cancellations",
      alt: "Rain cloud icon signifying less cancellations will be made due to privately owned fields",
    },
    {
      src: <ScholarshipSVG />,
      p: "Scholarships for Seniors",
      alt: "Graduate cap icon signifying scholarships can be awarded to seniors",
    },
    {
      src: <Parking />,
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
              {icon.src}
              <p className="lg:text-3xl text-xl text-center font-bold">{icon.p}</p>
            </div>
          );
        })}
        {iconArray.map((icon, index) => {
          return (
            <div key={index} className={Styles["icon-wrapper"]}>
              {icon.src}
              <p className="text-xl lg:text-3xl text-center font-bold">{icon.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
