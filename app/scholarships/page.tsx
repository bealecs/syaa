import Image from "next/image";
import PageBackButton from "../components/lib/PageBackButton";
import { ar } from "../components/lib/fonts";
import Styles from "./scholarships.module.css";

export default function Scholarships() {
  return (
    <article className={`${ar.className} w-10/12 mx-auto text-xl`}>
      <PageBackButton href="/" text="Back to main page" />
      <Image
        src={"/logo.svg"}
        alt="SYAA Logo"
        height={150}
        width={150}
        className="mx-auto"
      />
      <h1 className="text-4xl text-blue-700">SYAA Scholarships for Seniors</h1>
      <div className="flex justify-evenly mt-24 min-h-[50vh]">
      <a href="./scholarships/rod-taylor-scholarship" className="font-semibold text-blue-700 text-3xl border-2 border-blue-700 rounded-md h-fit p-4 bg-zinc-200 w-4/12 hover:bg-blue-700 transition duration-300 linear hover:text-white text-center">
      <Image
            src={"/Heart.svg"}
            alt="A graduation cap"
            height={150}
            width={150}
            className={`mx-auto my-12 ${Styles.heartbeat}`}
          />
          Rod taylor
        </a>
        <a href="./scholarships/rising-seniors" className="font-semibold text-blue-700 text-3xl border-2 border-blue-700 rounded-md h-fit p-4 bg-zinc-200 w-4/12 hover:bg-blue-700 transition duration-300 linear hover:text-white text-center">
          <Image
            src={"/Graduation-hat.svg"}
            alt="A graduation cap"
            height={150}
            width={150}
            className={`mx-auto my-12 ${Styles.tipHat}`}
          />
            Scholarships for Seniors
        </a>
      </div>
    </article>
  );
}
