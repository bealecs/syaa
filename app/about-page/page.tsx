import Image from "next/image";
import PageBackButton from "../components/lib/PageBackButton";
import { ar } from "../components/lib/fonts";

export default function About() {
  return (
    <article className={`${ar.className} lg:w-10/12 lg:mx-auto mx-4 my-8`}>
      <PageBackButton href="/" text="Back to main page" />
      <h1 className="text-6xl text-blue-700 font-semibold">
        Mission Statement
      </h1>
      <p className="text-xl mt-4 lg:text-3xl font-semibold">
        We are dedicated to creating a positive and inclusive environment where
        youth can grow through sports and physical education. Our focus is on
        fostering community spirit and personal development by:
      </p>
      <ul className="list-disc my-8 mx-4 lg:text-xl">
        <li className="my-4">
          Organizing, conducting, operating, and maintaining physical and
          athletic education, training, and sports programs.
        </li>
        <li className="my-4">
          Serving the youth of Suffolk and surrounding areas inclusive of all
          abilities, orientations, races & ethnicities, creeds, and religions.
        </li>
        <li className="my-4">
          Teaching good sportsmanship, teamwork, and community pride.
        </li>
      </ul>
      <div className="lg:flex">
        <Image
          src={"/aerial.svg"}
          alt="aerial photo of some of the fields at SYAA"
          width={600}
          height={600}
        />
        <div className="flex-col lg:mx-12 my-4 text-xl">
          <h2 className="text-4xl text-blue-700 mb-4 font-semibold">
            History of SYAA
          </h2>
          <p>
            Founded in <b>1981</b>, Suffolk Youth Athletic Association is a
            non-profit, charitable, tax-exempt organization whose sole purpose
            is to operate, conduct, and maintain athletic programs for the youth
            of Suffolk and the surrounding areas.
          </p>
          <br />
          <p>
            Today we service over 1,800 registered players, boys, and girls
            playing sports year round.{" "}
          </p>
          <br />
          <p>
            We are privately owned and run by volunteers. This includes Coaches,
            Assistant Coaches, Team Managers, Officials, Ground Keepers, and
            Concession Management, and a Board of Directors. It takes over
            25,000 volunteer hours to run and manage our programs on a yearly
            basis.
          </p>
          <br />
          <p>
            The past 40 years have been a period of tremendous growth for SYAA.
            From a small beginning, SYAA has grown to one of the largest
            privately operated youth sports organization in Virginia. We
            continue to operate as a volunteer program, stressing the need for
            parents to be active participants in their children’s endeavors.
          </p>
        </div>
      </div>
      <div className="lg:flex mt-4 lg:mt-12" id="philosophy">
        <div className="flex-col text-xl">
          <h2 className="text-4xl text-blue-700 mb-4 font-semibold">
            Our Philosophy
          </h2>
          <p>
            Over everything else, we want to provide a <b>safe</b> and{" "}
            <b>positive</b> experience.
          </p>
          <ul>
            <li className="my-2">
              <b>Encourage fun</b> - We play to have fun and show that
              participating, not winning, is what is important.
            </li>
            <li className="my-2">
              <b>Ensure Participation</b> - Everyone plays!
            </li>
            <li className="my-2">
              <b>Build Skills</b> - We emphasize and teach the fundamentals.
            </li>
            <li className="my-2">
              <b>Teach Values</b> - an opportunity to learn a strong work ethic,
              sportsmanship, perseverance, and teamwork.
            </li>
            <li className="my-2">
              <b>Fair Play</b> - Respect for the rules, officials, coaches,
              players, and oneself is a core value.
            </li>
            <li className="my-2">
              <b>Family involvement</b> - SYAA has something for the entire
              family.
            </li>
          </ul>
        </div>
        <Image
          src={"/soccer.svg"}
          alt="aerial photo of some of the fields at SYAA"
          width={600}
          height={600}
          className="hidden lg:ml-12 lg:block"
        />
      </div>
      <div className="lg:flex mt-4 lg:mt-12">
        <Image
          src={"/volunteer-run.svg"}
          alt="aerial photo of some of the fields at SYAA"
          width={600}
          height={600}
        />
        <div className="flex-col text-xl my-4 lg:mx-12">
          <h2 className="text-4xl text-blue-700 mb-4 font-semibold">
            Volunteer Driven
          </h2>
          <p>
            SYAA is indebted to many local businesses, organizations, and
            individuals who have sponsored teams over the years.
          </p>
          <br />
          <p>
            Thank you for continued support of our organization because without
            the parents, organizations, and businesses, we would not be the
            organization that we have become.
          </p>
          <br />
          <p>
            SYAA operates over 25 fields for Baseball, softball, soccer, and
            Field Hockey. All are privately owned by the Association, a rarity
            for youth sports organizations in the Tidewater Virginia area. We
            have teams playing throughout the Tidewater area and are “in season”
            year round.
          </p>
          <br />
          <p>
            Come out one Saturday and see the joy of the children and the pride
            of the parents.
          </p>
          <button className="transition duration-300 linear hover:text-white hover:bg-blue-700 hover:border-black border-2 border-blue-700 w-fit p-2 my-4"><a href="/volunteer">Volunteer Today!</a></button>
        </div>
      </div>
      <hr className="lg:my-12"/>
      <h4 className="text-3xl font-semibold my-4 text-blue-700">SYAA Organizational Policies</h4>
      <p className="my-4 text-xl font-bold">Please note, no pets are allowed beyond the parking lot while on SYAA property.</p>
      <p className="my-4 text-xl font-bold">SYAA is a non-smoking facility and no smoking is allowed on or beside playing fields.  Smoking is permitted in our parking lots.</p>
      <h4 className="text-xl font-semibold text-blue-700" >View full policies here:</h4>
      <div className="flex flex-col lg:flex-row my-4 text-blue-700 text-xl">
      <a className="lg:border-r-2 my-2 border-blue-700 pr-4" href="/lightning-policy">Thunder & Lightning Policy</a>
      <a className="lg:border-r-2 my-2 border-blue-700 lg:px-4" href="/policy/SYAA-concussion-management-policy.pdf" target="_blank" rel="noopener noreffer">Soccer Concussion Management Policy</a>
      <a className="lg:pl-4 my-2" href="/policy/SYAA-Bylaws.pdf" target="_blank" rel="noopener noreffer">SYAA Bylaws</a>
      </div>
    </article>
  );
}
