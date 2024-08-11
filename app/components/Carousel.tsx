import Image from "next/image";

interface Icons {
  src: string;
  p: string;
  alt: string;
}

export default function Carousel() {
  const iconArray: Icons[] = [
    { src: "/soccerball-icon.svg", p: "25 fields", alt: "Soccer ball icon" },
    {
      src: "/silverware-icon.svg",
      p: "5-Star Concessions",
      alt: "Silverware icon signifying concession stands",
    },
    {
      src: "/floodlights-icon.svg",
      p: "Floodlights",
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
  ];

  return (
    <div className="flex justify-between w-7/12 mx-auto my-12">
      {iconArray.map((icon, index) => {
        return (
          <div key={index} className="w-fit">
            <Image
              src={icon.src}
              alt={icon.alt}
              height={150}
              width={150}
              className="mx-auto"
            />
            <p className="text-3xl text-center font-bold">{icon.p}</p>
          </div>
        );
      })}
      {/* CSS animation */}
      <style>{`
        @keyframes animateCarousel {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-900%);
          }
        }

        .overflow-hidden .flex .w-48 {
          animation: animateCarousel 14s linear infinite;
        }
      `}</style>
    </div>
  );
}
