import Image from "next/image";
import PageBackButton from "../components/lib/PageBackButton";
import PriceDivisions from "./PriceDivisions";
import BaseballIcon, {
  BaseballIcon2,
} from "../components/lib/svg-components/BaseballIcon";
import Styles from "./ball.module.css";
import Viber from "../components/lib/svg-components/Viber";

export default function BaseballSoftball() {
  return (
    <section className="lg:my-12 lg:w-10/12 lg:mx-auto mx-4">
      <div className="lg:my-8">
        <PageBackButton href="/" text="Back to main page" />
      </div>
      <div className="lg:flex justify-between items-center">
        <div className="flex-col">
          <h1 className="lg:text-6xl text-3xl text-blue-700">
            SYAA Baseball/Softball
          </h1>
          <h4 className="my-4">Sections:</h4>
          <div className="flex text-blue-700 underline">
            <a
              href="./baseball-softball/#rec-league"
              className="border-r-2 border-blue-700 pr-4"
            >
              Recreational League
            </a>
            <a
              href="./baseball-softball/#advanced"
              className="border-r-2 border-blue-700 px-4"
            >
              All-Star Division
            </a>
            <a
              href="./baseball-softball/#select"
              className="border-r-2 border-blue-700 px-4"
            >
              Select Travel
            </a>
            <a href="./baseball-softball/#adult" className="pl-4">
              Adult League
            </a>
          </div>
        </div>
        <Image
          src="/logo.svg"
          alt="SYAA logo"
          height={150}
          width={150}
          className="hidden lg:block"
        />
      </div>
      <div className={`w-fit mt-24 ${Styles.baseball}`}>
        <BaseballIcon2 />
      </div>

      <div className="hidden lg:block">
        <PriceDivisions />
      </div>
      <hr />
      <div className="lg:flex justify-start my-8">
        <div className="lg:w-7/12">
          <h3 className="text-3xl text-blue-700">Fall 2024 Season Info</h3>
          <ul className="list-disc ml-4">
            <li className="my-2 font-semibold text-xl">
              Registration closes August 16th, 2024.
            </li>
            <li className="my-2 font-semibold text-xl">
              Late registration fees (+$25) will apply in final two weeks before
              a season start date.
            </li>
            <li className="my-2 font-semibold text-xl">
              Practices will begin by the last week of August.
            </li>
            <li className="my-2 font-semibold text-xl">
              Games schedule will begin Saturday, September 7th.
            </li>
            <li className="my-2 font-semibold text-xl">
              Follow us on Facebook for updates and events @ Suffolk Youth
              Athletic Association - Baseball/Softball
            </li>
          </ul>
        </div>
        <div className="lg:w-3/12 lg:mt-0 my-4 mx-auto">
          <h3 className="lg:text-center text-2xl text-blue-700">
            How our age brackets work
          </h3>
          <p className="my-4">
            The playing brackets for Rec league are broken down as U4, U5, U6,
            U8, U10, U12, U13, U16. Each SYAA Rec league year has a Spring and
            Fall season
          </p>
          <p className="my-4">
            The age bracket for a child is determined by their age as of January
            1st of the current year. Note that the format “U followed by age”
            really means “under or younger” than that age. For example, U8 means
            “7 and younger”.{" "}
          </p>
        </div>
      </div>
      <div id="rec-league" className="my-8 bg-slate-200 p-4 rounded-md">
        <h3 className="text-3xl text-blue-700">Recreational League</h3>
        <aside>$50-130/season (u5/u18) + $20/family *fee</aside>
        <p className="lg:text-xl my-4 leading-loose">
          SYAA has always prided itself on offering a fun and safe program for
          children, ages 3 to 15. All our teams are focused on enjoying the game
          and teaching the basics. We offer small-sided games, designed to allow
          all players to have equal participation, regardless of ability or
          experience. Players will learn the fundamentals and teamwork. SYAA
          prioritizes developing players who respect themselves, their
          teammates, their opponents, the officials, and the game.
        </p>
        <p className="lg:text-xl leading-loose my-4">
          Rec league games are held on Saturdays, and all players will receive
          equal playing time regardless of skill level and experience.
        </p>
      </div>
      <div id="advanced" className="my-8 bg-slate-200 p-4 rounded-md">
        <h3 className="text-3xl text-blue-700">All-Star Division</h3>
        <aside>$140/season + $20/family *fee</aside>
        <p className="lg:text-xl my-4 leading-loose">
          Our All-Star program was created as an alternative for players who
          want to remain in recreational games but play at a higher level of
          competition also.The All-Star team provides a player with a good
          competitive challenge and provides the player the opportunity to
          develop his/her skills.
        </p>
        <p className="lg:text-xl my-4 leading-loose">
          All-Star teams play their games on Saturdays. Mandatory atleast 2
          practices each week. Players are nominated by coaches.
        </p>
      </div>
      <div id="select" className="my-8 bg-slate-200 p-4 rounded-md">
        <h3 className="text-3xl text-blue-700">Select Travel</h3>
        <aside>$160/season + $20/family *fee</aside>
        <p className="lg:text-xl my-4 leading-loose">
          The Select Travel program offers a competitive training and match
          environment for players between the ages of 8 and 19 who meet minimum
          standards as set by our director of coaching and coaching staff.
          Select Travel is the highest level of play that SYAA offers. Players
          who are willing to commit a significant amount of time and energy to
          the program are selected through an annual tryout process and placed
          accordingly. Please click the link below to contact the
          baseball/softball commissioner for more information.
        </p>
      </div>
      <div id="adult" className="my-8 bg-slate-200 p-4 rounded-md">
        <h3 className="text-3xl text-blue-700">Adult League</h3>
        <p className="lg:text-xl my-4 leading-loose">Information Pending....</p>
      </div>
      <h4 className="text-3xl text-center my-8">
        Further questions?{" "}
        <a href="/contact" className="underline text-blue-700">
          Contact us
        </a>
      </h4>
      <div className="flex flex-wrap text-center items-center lg:justify-evenly my-8">
        <div className="w-6/12 lg:w-fit border-2 border-blue-700 lg:border-0  lg:mx-auto">
          <h4 className="text-xl">T-Ball </h4>
          <div className="flex items-center my-2">
            <Viber />
            <p className="px-2">(757) 646-9455</p>
          </div>
          <h4>Will Parker</h4>
        </div>
        <div className="w-6/12 lg:w-fit border-2 border-blue-700 lg:border-0  lg:mx-auto">
          <h4 className="text-xl">Pinto </h4>
          <div className="flex items-center my-2">
            <Viber />
            <p className="mx-2">(757) 510-4307</p>
          </div>
          <h4>Aaron Carnegie</h4>
        </div>
        <div className="w-6/12 lg:w-fit border-2 border-blue-700 lg:border-0  lg:mx-auto">
          <h4 className="text-xl">Mustang </h4>
          <div className="flex items-center my-2">
            <Viber />
            <p className="mx-2">(757) 338-3475</p>
          </div>
          <h4>Corey Holmes</h4>
        </div>
        <div className="w-6/12 lg:w-fit border-2 border-blue-700 lg:border-0  lg:mx-auto">
          <h4 className="text-xl">Bronco </h4>
          <div className="flex items-center my-2">
            <Viber />
            <p className="px-2">(843) 408-3334</p>
          </div>
          <h4>James Morrison</h4>
        </div>
        <div className="w-6/12 lg:w-fit border-2 border-blue-700 lg:border-0  lg:mx-auto">
          <h4 className="text-xl">Pony </h4>
          <div className="flex items-center my-2">
            <Viber />
            <p className="mx-2">(757) 334-3020</p>
          </div>
          <h4>Brian Smith</h4>
        </div>
        <div className="w-6/12 lg:w-fit border-2 border-blue-700 lg:border-0  lg:mx-auto">
          <h4 className="text-xl">Colt </h4>
          <div className="flex items-center my-2">
            <Viber />
            <p className="mx-2">(757) 621-9911</p>
          </div>
          <h4>Jeff Beale</h4>
        </div>
        <div className="w-6/12 lg:w-fit border-2 border-blue-700 lg:border-0  lg:mx-auto">
          <h4 className="text-xl">Softball Commissioner</h4>
          <div className="flex items-center my-2">
            <Viber />
            <p className="mx-2">(804) 926-6087</p>
          </div>
          <h4>Kasie Wilson</h4>
        </div>
      </div>
    </section>
  );
}
