import Image from "next/image";
import PageBackButton from "../components/lib/PageBackButton";
import { ar } from "../components/lib/fonts";
import Logo from "../components/lib/svg-components/Logo";

export default function Location() {
  return (
    <article className={`${ar.className} m-4 lg:w-10/12 min-h-[60vh] lg:mx-auto text-xl`}>
      <PageBackButton href="/" text="Back to main page" />
      <div className="mx-auto my-4">
        <Logo />
      </div>
      <h1 className="text-4xl text-blue-700">SYAA Location</h1>
      <p className="text-2xl font-semibold mt-8">
        SYAA playing fields are located on either side of King’s Fork Road, just
        down the street from King’s Fork Middle School.
        <br />
        <br />
        Baseball & Softball Fields are located behind the Dominion power station
        (southside of road), while the Soccer & Field Hockey fields are located
        across from the power station (northside of road).
      </p>
      <br />
      <div className="lg:flex justify-evenly text-xl font-semibold">
        <div className="text-center text-xl font-semibold my-12 border-2 border-blue-700 rounded-md w-fit mx-auto p-4">
          <h4 className="text-3xl text-blue-700">Baseball/Softball:</h4>
          <p>432 Kings Fork Road</p>
          <p>Suffolk, VA</p>
          <p>23434</p>
        </div>
        <div className="text-center text-xl font-semibold my-12 border-2 border-blue-700 rounded-md w-fit mx-auto p-4">
          <h4 className="text-3xl text-blue-700">SYAA Mailing Address:</h4>
          <p>SYAA</p>
          <p>P.O. Box 3081</p>
          <p>Suffolk, VA</p>
          <p>23434</p>
        </div>
        <div className="text-center text-xl font-semibold my-12 border-2 border-blue-700 rounded-md w-fit mx-auto p-4">
          <h4 className="text-3xl text-blue-700">Soccer/Field Hockey:</h4>
          <p>501 Kings Fork Road</p>
          <p>Suffolk, VA</p>
          <p>23434</p>
        </div>
      </div>
      <h4 className="text-2xl my-8 text-blue-700 font-semibold">
        <b>
          Please note, no pets are allowed beyond the parking lot while on SYAA
          property.
          <br />
          <br />
          SYAA is a non-smoking facility and no smoking is allowed on or beside
          the playing fields. Smoking is permitted in our parking lots.
        </b>
      </h4>
    </article>
  );
}
