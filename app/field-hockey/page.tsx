import Image from "next/image";
import PageBackButton from "../components/lib/PageBackButton";
import PriceDivisions from "./PriceDivisions";
import Styles from "./FieldHockey.module.css";
import FAQ from "../components/FAQ";

export default function FieldHockey() {
  const currentYear = new Date().getFullYear();

  const FHFAQ = [
    {
      question:
        "When will my recreational field hockey coach contact me about the practice schedule?",
      answer:
        "You can expect your coach to contact you about two weeks prior to the start of the season",
    },
    {
        question:
          "What will the field hockey schedule be? What days will my child's team practice?",
        answer:
          "Your child will have field hockey on Saturdays. We do not have any away games. Times are based on the age of the child which will be shared by the coach.",
      },
      {
        question:
          "What equipment will my child need for the hockey season?",
        answer:
          "Your child will need shin guards, shoes, and socks. SYAA will provide T-Shirts, practice sticks, and balls. Goggles, practice balls, and gloves are optional.",
      },
      {
        question:
          "How will I know if practice or a game has been cancelled?",
        answer:
          "You should receive an email about any cancellations. Please check your junk mail to ensure that you have not received an email. We try to get any cancellations out as early as possible.",
      },
      {
        question:
          "Will there be a travel team?",
        answer:
          "Yes, we are working on the plans for that and more information will be shared at a later date.",
      },
  ];
  
  return (
    <section className="my-12 w-10/12 mx-auto">
      <div className="my-8">
        <PageBackButton href="/" text="Back to main page" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-col">
          <h1 className="text-6xl text-blue-700">SYAA Field Hockey</h1>
          <h4 className="my-4">Sections:</h4>
          <div className="flex text-blue-700 underline">
            <a
              href="./field-hockey/#summer"
              className="border-r-2 border-blue-700 pr-4"
            >
              Summer Camp
            </a>
            <a href="./field-hockey/#winter" className="px-4">
              Winter League
            </a>
          </div>
        </div>
        <Image src="/logo.svg" alt="SYAA logo" height={150} width={150} />
      </div>

      <Image
        src="/hockeyBall.svg"
        alt="Field Hockey ball rolling across the top of the page"
        className={`${Styles.hockeyBall} mt-24`}
        width={128}
        height={128}
      />
      <PriceDivisions />
      <hr />
      <div className="flex justify-start my-8">
        <div className="w-7/12">
          <h3 className="text-3xl text-blue-700">Important Info</h3>
          <ul className="list-disc ml-4">
            <li className="my-2 font-semibold text-xl">
              Led by Darcy Pinchbeck, former ODU Field Hockey star and High
              School coach. With assistance from local school Field Hockey
              coaches.
            </li>
            <li className="my-2 font-semibold text-xl">
              All age groups based on age on Jan 1st, {currentYear}.
            </li>
            <li className="my-2 font-semibold text-xl">
              Skilled players will be assessed to see if they can play in a
              higher age bracket (if requested)
            </li>
            <li className="my-2 font-semibold text-xl">
              Follow us on Facebook for updates and events @ Suffolk Youth
              Athletic Association - Field Hockey
            </li>
          </ul>
        </div>
        <div className="w-3/12 mx-auto">
          <h3 className="text-center text-2xl text-blue-700">
            How our age brackets work
          </h3>
          <p className="my-4">
            The playing brackets for Rec league are broken down as U4, U5, U6,
            U8, U10, U12, U13, U16. Each SYAA Rec league year has a Summer and
            Winter season
          </p>
          <p className="my-4">
            The age bracket for a child is determined by their age as of January
            1st of the current year. Note that the format “U followed by age”
            really means “under or younger” than that age. For example, U8 means
            “7 and younger”.{" "}
          </p>
        </div>
      </div>

      <div id="summer" className="my-8 bg-slate-200 p-4 rounded-md">
        <h3 className="text-3xl text-blue-700">Summer Camp</h3>
        <p className="text-xl my-4 leading-loose">Information Pending...</p>
      </div>
      <div id="winter" className="my-8 bg-slate-200 p-4 rounded-md">
        <h3 className="text-3xl text-blue-700">
          Winter League/Indoor Training
        </h3>
        <p className="text-xl my-4 leading-loose">Information Pending...</p>
      </div>
      <FAQ sport="Field-Hockey" faq={FHFAQ} />
      <h4 className="text-3xl text-center my-8">
        Other questions?{" "}
        <a href="/contact" className="underline text-blue-700">
          Contact us
        </a>
      </h4>
    </section>
  );
}
