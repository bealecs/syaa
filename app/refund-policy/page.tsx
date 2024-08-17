import Image from "next/image";
import PageBackButton from "../components/lib/PageBackButton";
import { ar } from "../components/lib/fonts";

export default function Refund() {
  return (
    <article className={`${ar.className} lg:w-10/12 mx-auto text-xl`}>
      <PageBackButton href="/" text="Back to main page" />
      <Image
        src={"/logo.svg"}
        alt="SYAA Logo"
        height={150}
        width={150}
        className="mx-auto my-4"
      />
      <h1 className="text-4xl text-blue-700">SYAA Refund Policy</h1>
      <h4 className="text-blue-700 my-8 text-2xl">
        SYAA is a volunteer run, non-profit, player-focused organization that
        provides a fun, safe, and structured learning environment for developing
        young players aged 3-18. We do everything possible to keep our costs
        down for our patrons.
      </h4>
      <p>Our refund policy is as follows:</p>
      <br />
      <ul className="list-disc ml-4">
        <li className="my-2 py-2">
          <b>
            Once a player has completed registration and paid for registration,
            he/she will be placed on a team.{" "}
          </b>
        </li>
        <li className="my-2 py-2">
          <b>
            If for some reason a refund is requested up to 2 weeks before the
            season start date, we will provide a full refund, minus a $15
            administrative fee. However, If we can’t find a place for a player
            to play in an age group we will provide a full refund.
          </b>
        </li>
        <li className="my-2 py-2">
          <b>
            For requests received within 2 weeks of the season start date, we
            will refund 50% of the registration fee.
          </b>
        </li>
        <li className="my-2 py-2">
          <b>
            After the season starts, we will not be able to provide a refund.
          </b>
        </li>
      </ul>
      <h4 className="text-2xl my-8 text-blue-700 font-semibold">
        <b>
          To request a refund, please <a href="/contact" className="text-blue-700 underline">visit our contact page</a>
        </b>
      </h4>
    </article>
  );
}
