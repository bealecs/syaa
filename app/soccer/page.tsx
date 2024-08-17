import Image from "next/image";
import PageBackButton from "../components/lib/PageBackButton";
import PriceDivisions from "./PriceDivisions";
import Styles from "./soccer.module.css";
import FAQ from "../components/lib/FAQ";
import Soccerball2 from "../components/lib/svg-components/Soccerball2";

const SFAQ = [
  {
    question:
      "When will my recreational soccer coach contact me about the practice schedule?",
    answer:
      "You can expect your coach to contact you about two weeks prior to the start of the season",
  },
  {
    question:
      "What will the soccer schedule be? What days will my child's team practice?",
    answer:
      "Your child will have soccer games on Saturdays at SYAA. We do not have any away games. Practice schedule will be set up by the coach and will be at least one day a week (depending on age group) in the evening.",
  },
  {
    question: "What equipment will my child need for the soccer season?",
    answer:
      "Your child will need shin guards, soccer cleats, an appropriate size soccer ball, and soccer socks. SYAA will provide your soccer uniform for the game day.",
  },
  {
    question: "How will I know if practice or a game has been cancelled?",
    answer:
      "You should receive an email about any cancellations. Please check your junk mail to ensure that you have not received an email. We try to get any cancellations out as early as possible.",
  },
  {
    question: "Can I request a specific coach?",
    answer:
      "Yes, you can request a specific coach and we will do our best to accomodate any requests. The request will depend on how many people have already requested a specific coach. Please keep in mind that with any requests, we do not want to stack teams unfairly as we are trying to provide a fun and competitive environment for your children.",
  },
];

export default function Soccer() {
  return (
    <section className="m-4 lg:w-10/12 lg:mx-auto">
      <div className="my-8">
        <PageBackButton href="/" text="Back to main page" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-col">
          <h1 className="lg:text-6xl text-3xl text-blue-700">SYAA Soccer</h1>
          <h4 className="my-4">Sections:</h4>
          <div className="flex lg:w-full flex-wrap text-blue-700 underline items-center">
            <a
              href="./soccer/#rec-league"
              className="border-r-2 border-blue-700 px-4"
            >
              Recreational League
            </a>
            <a
              href="./soccer/#advanced"
              className="border-r-2 border-blue-700 px-4"
            >
              Advanced Division
            </a>
            <a
              href="./soccer/#select"
              className="border-r-2 border-blue-700 px-4"
            >
              Select Travel
            </a>
            <a
              href="./soccer/#top-soccer"
              className="px-4 border-r-2 border-r-blue-700"
            >
              TOPsoccer
            </a>
            <a href="./soccer/#adult" className="px-4 border-r-2 border-r-blue-700">
              Adult League
            </a>
          </div>
        </div>
        <Image src="/logo.svg" alt="SYAA logo" height={150} width={150} className="hidden lg:block" />
      </div>
      <div className={`w-fit mt-24 ${Styles.soccerBall}`}>
      <Soccerball2 />
      </div>
      
      
      <div className="hidden lg:block">
      <PriceDivisions />
      </div>
      <hr />
      <div className="lg:flex justify-start my-8">
        <div className="lg:w-7/12">
          <h3 className="text-3xl text-blue-700">Important Dates</h3>
          <ul className="list-disc ml-4">
            <li className="my-2 font-semibold text-xl">
              Registration will open in January for Spring seasons and in June
              for Fall seasons.
            </li>
            <li className="my-2 font-semibold text-xl">
              Late registration fees (+$25) will apply in final two weeks before
              a season start date.
            </li>
            <li className="my-2 font-semibold text-xl">
              Recreational teams will provide all players with equal playing
              time regardless of skill level. Recreational team practices will
              start one week before season starts.
            </li>
            <li className="my-2 font-semibold text-xl">
              Tryouts are required for Advanced and Select Travel teams.
            </li>
          </ul>
        </div>
        <div className="lg:w-3/12 mx-auto">
          <h3 className="lg:text-center my-4 text-2xl text-blue-700">
            How our age brackets work
          </h3>
          <p className="my-4">
            The playing brackets for Rec Soccer are broken down as U4, U5, U6,
            U8, U10, U12, U13, U16. Each SYAA Rec Soccer year has a Spring and
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
        <aside>$65/season (u4/u5)</aside>
        <aside>$100/season (u6+) + $20/family *fee</aside>
        <p className="lg:text-xl my-4 leading-loose">
          SYAA has always prided itself on offering a fun and safe soccer
          program for children, ages 3 to 15. All our teams are focused on
          enjoying soccer and teaching the basics of the game. We offer
          small-sided games, designed to allow all players to have equal
          participation, regardless of ability or experience. Players will learn
          ball-handling skills and teamwork. SYAA Soccer prioritizes developing
          players who respect themselves, their teammates, their opponents, the
          officials, and the game.
        </p>
        <p className="lg:text-xl my-4">
          Rec soccer games are held on Saturdays, and all players will receive
          equal playing time regardless of skill level and experience.
        </p>
        <a
          className="border-2 border-blue-700 rounded w-fit p-2 transition duration-300 linear hover:bg-transparent hover:text-black text-white bg-blue-700"
          href="/policy/2020+SYAA+Rec+Soccer+Rules.pdf"
        >
          Recreational Soccer Rules
        </a>
      </div>
      <div id="advanced" className="my-8 bg-slate-200 p-4 rounded-md">
        <h3 className="text-3xl text-blue-700">Advanced Division</h3>
        <aside>$140/season + $20/family *fee</aside>
        <p className="lg:text-xl my-4 leading-loose">
          Our Advanced Soccer program was created as an alternative for players
          who want to remain in recreational soccer but play at a higher level
          of competition. Advanced soccer provides a player a good first
          competitive challenge and provides the player the opportunity to
          develop his/her soccer skills.
        </p>
        <p className="lg:text-xl my-4 leading-loose">
          Advanced soccer teams play their games on Saturdays.
        </p>
        <p className="lg:text-xl my-4 leading-loose">
          SYAA Soccer league is also a member of the Tidewater Advanced Soccer
          League Incorporated and Interleague (TASLI). TASLI clubs compete
          against other clubs from the Tidewater area and teams from northeast
          North Carolina. TASL has its own website where the schedules and
          updates will be posted. Managers and parents should use the TASL
          website to get the most up-to-date information on their games.
        </p>
        <a
          className="border-2 border-blue-700 rounded w-fit p-2 transition duration-300 linear hover:bg-transparent hover:text-black text-white bg-blue-700"
          href="https://tasli.org/"
          target="_blank"
          rel="noopener noreffer"
        >
          TASL Website
        </a>
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
          accordingly. SYAA Select Travel teams play games under the United
          States Soccer Association (USA Soccer) and must be officially rostered
          and carded. The Select Travel matches are scheduled by either the Club
          Champions League (CCL) or Virginia Premier Soccer League (VPSL).
          Please see their website for more information and game schedules.
        </p>
        <a
          className="border-2 border-blue-700 rounded w-fit p-2 transition duration-300 linear hover:bg-transparent hover:text-black text-white bg-blue-700"
          href="https://www.vapremierleague.com/"
          target="_blank"
          rel="noopener noreffer"
        >
          VPSL Website
        </a>
        <a
          className="border-2 border-blue-700 rounded w-fit mx-4 p-2 transition duration-300 linear hover:bg-transparent hover:text-black text-white bg-blue-700"
          href="https://www.clubchampionsleague.com/"
          target="_blank"
          rel="noopener noreffer"
        >
          CCL Website
        </a>
      </div>
      <div id="top-soccer" className="my-8 bg-slate-200 p-4 rounded-md">
        <h3 className="text-3xl text-blue-700">TOPSoccer</h3>
        <aside>*FREE* for the special needs athletes</aside>
        <p className="lg:text-xl my-4 leading-loose">
          TOPSoccer is SYAA’s program for athletes with special needs. This
          program provides young people with physical or cognitive disabilities
          a place where they can be a part of a real sports team, complete with
          practices, games, uniforms, and end of season trophies. SYAA provides
          this program at no cost to the athlete’s family. TOPSoccer is a VYSA
          initiative.
        </p>
        <p className="lg:text-xl my-4 leading-loose">
          We need more volunteers to ensure this program is at its best. We are
          looking for team managers, head coaches, assistant coaches and player
          “buddies”. Each buddy assists a designated player during practices and
          games by providing instruction, encouragement, and camaraderie. This
          program is also a great opportunity to earn volunteer hours.
        </p>
        <p className="lg:text-xl my-4 leading-loose">
          If you are interested in helping, or would like additional
          information, please contact Derk Gregory.
        </p>
        <a
          className="border-2 border-blue-700 rounded w-fit p-2 transition duration-300 linear hover:bg-transparent hover:text-black text-white bg-blue-700"
          href="mailto:vtderk@charter.net"
        >
          Contact Derk Gregory
        </a>
      </div>
      <div id="adult" className="my-8 bg-slate-200 p-4 rounded-md">
        <h3 className="text-3xl text-blue-700">Adult League</h3>
        <aside>$65/season</aside>
        <p className="lg:text-xl my-4 leading-loose">
          We are proud to announce the kick off of our new Adult League. <br />
          This league will be played on Saturday evenings between 5:30 and 6:30
          depending on how many signups we get.
          <br /> Contact our Director of Coaching for more information.
        </p>
        <a
          className="border-2 border-blue-700 rounded w-fit p-2 transition duration-300 linear hover:bg-transparent hover:text-black text-white bg-blue-700"
          href="/policy/SYAA-Adult-Coed-Fun-League-Rules.pdf"
          target="_blank"
          rel="noopener noreffer"
        >
          Adult League Rules
        </a>
        <a
          className="border-2 border-blue-700 rounded w-fit mx-4 p-2 transition duration-300 linear hover:bg-transparent hover:text-black text-white bg-blue-700"
          href="mailto:suffolkscorpions@gmail.com"
          target="_blank"
          rel="noopener noreffer"
        >
          Contact Director of Coaching
        </a>
      </div>
      <FAQ sport="Soccer" faq={SFAQ} />
      <h4 className="text-3xl text-center my-8">
        Further questions?{" "}
        <a href="/contact" className="underline text-blue-700">
          Contact us
        </a>
      </h4>
    </section>
  );
}
