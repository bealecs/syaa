import Image from "next/image";
import PageBackButton from "../../components/lib/PageBackButton";
import { ar } from "../../components/lib/fonts";

export default function RodTaylorScholarship() {
  return (
    <article className={`${ar.className} w-10/12 mx-auto text-xl`}>
      <PageBackButton href="/scholarships" text="Back to previous page" />
      <Image
        src={"/logo.svg"}
        alt="SYAA Logo"
        height={150}
        width={150}
        className="mx-auto"
      />
      <h1 className="text-4xl text-blue-700">Rod Taylor Scholarship Fund</h1>
      <h4 className="text-blue-700 my-8 text-2xl">
        The scholarship, in the amount of $750 will be awarded each July at the
        SYAA Board meeting to a young lady that participated in the SYAA
        Softball program and is pursuing higher education.
      </h4>
      <p>
        The Rod Taylor Scholarship Fund was created to honor the legacy of
        Rodney Allen Taylor and his dedication to youth sports, in particular
        his love of fast-pitch softball. He was such an intertwined part of the
        association and the youth that were involved in it. His commitment to
        youth sports meant he was always willing to step up and get the job
        done.
        <br />
        <br /> He played so many roles over the years, from coach, to
        commissioner, all the way to the SYAA president. To try and honor his
        efforts SYAA Softball and the SYAA family have committed to keeping the
        scholarship fund funded for a minimum of the next ten years.
      </p>
      <br />
      <h4 className="text-2xl font-semibold">Entries Requirements:</h4>
      <ul className="list-disc ml-4">
        <li className="my-2 py-2">
          <b>
            Applicants must compose an essay explaining how the experience of
            playing Softball at SYAA has positively impacted their life.
          </b>
        </li>
        <li className="my-2 py-2">
          <b>
            The applicant must have participated in SYAA Softball, at any level.
          </b>
        </li>
        <li className="my-2 py-2">
          <b>Essay minimum length is 250 words</b>
        </li>
        <li className="my-2 py-2">
          <b>
            The entry should also provide the following information:
            <ul className="list-disc ml-12">
              <li className="my-2">
                The years/seasons that you played at SYAA
              </li>
              <li className="my-2">
                Location of your desired higher-education (i.e. college,
                university, or trade school)
              </li>
              <li className="my-2">Your contact information</li>
            </ul>
          </b>
        </li>
        <li className="my-2 py-2">
          <b>
            Entries must be submitted be email or mail by June 1st of each
            calendar year
          </b>
        </li>
      </ul>
      <h4 className="text-2xl my-8 text-blue-700 font-semibold">
        <b>Process:</b>
      </h4>
      <p className="text-xl">
        The selection committee will be comprised of Priscilla Taylor (Rod’s
        Wife), Delaney Taylor (Rod’s Daughter), and the current SYAA Softball
        Commissioner. The committee will review all valid applications and vote
        on a winner. The winner will be notified and requested to attend the
        July SYAA Board Meeting for scholarship presentation. <br /> <br />Good Luck to
        everyone!
      </p>
      <div className="font-semibold text-xl my-8">
      <p className="my-4">Mail submissions to:</p>
      <p>Rod Taylor Scholarship</p>
      <p>P. O. Box 3081</p>
      <p>Suffolk, VA</p>
      <p>23439-3081</p>
      </div>
    </article>
  );
}
