import PageBackButton from "../components/lib/PageBackButton";
import Coaching from "./Coaching";
import DonateBanner from "./DonateBanner";
import OpenerComponent from "./OpenerComponent";

export default function Volunteer() {
  return (
    <>
      <DonateBanner />
      <div className="lg:w-10/12 lg:mx-auto m-4">
        <PageBackButton href="/" text="Back to main page" />
        <OpenerComponent />
        <Coaching />
      </div>
    </>
  );
}
