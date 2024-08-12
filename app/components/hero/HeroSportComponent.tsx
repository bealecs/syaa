interface SportComponentParams {
    isHovered: boolean;
    onMouseEnter: (event: React.MouseEvent<HTMLElement>) => void;
    sport: string;
    background: string;
}

export default function HeroSportComponent({ isHovered, onMouseEnter, sport, background}: SportComponentParams) {
  return (
    <a
      href={`/${sport}`}
      className={`${
        isHovered ? "w-6/12" : "w-3/12"
      } lg:h-[75vh] transition-all duration-300 linear bg-blue-500 border-r-2`}
      onMouseEnter={onMouseEnter}
      style={{ backgroundImage: `url(${background})`, backgroundSize:"cover", backgroundPosition:"center"}}
    >
    </a>
  );
}
