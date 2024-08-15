import PageBackButton from "../components/lib/PageBackButton";
import Coaching from "./Coaching";
import DonateBanner from "./DonateBanner";
import OpenerComponent from "./OpenerComponent";

export default function Volunteer() {
  return (
    <>
      <DonateBanner />
      <div className="w-10/12 mx-auto">
        <PageBackButton href="/" text="Back to main page" />
        <OpenerComponent />
        <Coaching />
      </div>
    </>
  );
}
