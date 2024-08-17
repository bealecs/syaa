import Image from "next/image";
import PageBackButton from "../components/lib/PageBackButton";
import { ar } from "../components/lib/fonts";
import Styles from "./scholarships.module.css";
import ScholarshipSVG from "../components/lib/svg-components/ScholarshipSVG";
import Heart from "../components/lib/svg-components/Heart";

export default function Scholarships() {
  return (
    <article className={`${ar.className} m-4 lg:w-10/12 lg:mx-auto text-xl`}>
      <PageBackButton href="/" text="Back to main page" />
      <Image
        src={"/logo.svg"}
        alt="SYAA Logo"
        height={150}
        width={150}
        className="mx-auto"
      />
      <h1 className="text-4xl text-blue-700">SYAA Scholarships for Seniors</h1>
      <div className=" mt-24 min-h-[50vh] lg:hidden">
        <a
          href="./scholarships/rod-taylor-scholarship"
          className="block my-24 font-semibold text-blue-700 text-3xl border-2 border-blue-700 rounded-md h-fit p-4 bg-zinc-200  hover:bg-blue-700 transition duration-300 linear hover:text-white text-center"
        >
          Rod taylor
        </a>

        <a
          href="./scholarships/rising-seniors"
          className="block my-24 font-semibold text-blue-700 text-3xl border-2 border-blue-700 rounded-md h-fit p-4 bg-zinc-200 hover:bg-blue-700 transition duration-300 linear hover:text-white text-center"
        >
          Scholarships for Seniors
        </a>
      </div>
      <div className="justify-evenly mt-24 min-h-[50vh] lg:flex hidden">
        <a
          href="./scholarships/rod-taylor-scholarship"
          className="font-semibold text-blue-700 text-3xl border-2 border-blue-700 rounded-md h-fit p-4 bg-zinc-200 w-4/12 hover:bg-blue-700 transition duration-300 linear hover:text-white text-center"
        >
          <div className={`${Styles.heartbeat} w-fit mx-auto p-12`}>
          <Heart />
          </div>
          Rod taylor
        </a>
        <a
          href="./scholarships/rising-seniors"
          className="font-semibold text-blue-700 text-3xl border-2 border-blue-700 rounded-md h-fit p-4 bg-zinc-200 w-4/12 hover:bg-blue-700 transition duration-300 linear hover:text-white text-center"
        >
          <div className={`${Styles.tipHat} w-fit mx-auto p-12`}>
            <ScholarshipSVG />
          </div>
          Scholarships for Seniors
        </a>
      </div>
    </article>
  );
}
