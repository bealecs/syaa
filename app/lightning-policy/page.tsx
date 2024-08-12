import PageBackButton from "../components/lib/PageBackButton";
import { ar } from "../components/lib/fonts";

export default function Lightning() {
  return (
    <article className={`${ar.className} w-10/12 mx-auto text-xl`}>
      <PageBackButton href="/" text="Back to main page" />
      <h1 className="text-4xl text-blue-700">Thunder & Lightning Policy</h1>
      <h4 className="text-blue-700 my-8 text-2xl">
        SYAA follows the 30/30 rule:
      </h4>
      <p>
        By way of definition, dangerous weather such as thunderstorms and
        tornadoes constitute unplayable conditions, if any one of the following
        is present:
      </p>
      <br />
      <ul>
        <li className="my-2">
          <b>Lightning is observed</b>
        </li>
        <li className="my-2">
          <b>
            Reports of lightning striking the ground within ten miles of the
            playing site.
          </b>
        </li>
        <li className="my-2">
          <b>Thunder is heard with or without the presence of lightning.</b>
        </li>
        <li className="my-2">
          <b>Severe thunderstorm and/or tornado warnings are in effect.</b>
        </li>
      </ul>
      <br />
      <p>
        SYAA club reps, coaches, team officials, and referees should be advised
        that if ANY of the above conditions exist then a match or training
        session should be suspended. At the sign of any thunder/lightning all
        play stops immediately and cannot resume until <b>30 minutes</b> after
        the last thunder/lightning observation.{" "}
      </p>
      <br />
      <p>
        The safety of all is the only concern. There will be no consideration
        given to cost, inconvenience, or advantage due to the necessity of a
        time delay or replay/reschedule.
      </p>
      <p> What to do if caught in the open during lightning:</p>
      <br />
      <ul className="list-disc px-4">
        <li className="my-2">
            Most deaths occur when a person is in the open, under a tree, or
            touching a large metal object like a goal. If you are caught in the
            open, crouch or seek the lowest spot available. Move away from any
            isolated tall objects or metal structures.
        </li>
        <li className="my-2">
            If possible, seek shelter in a large building or enclosed
            automobile.
        </li>
        <li className="my-2">
            Get away from open vehicles, such as pickup truck beds,
            convertibles, bicycles, motorcycles, etc.
        </li>
        <li className="my-2">
            If you feel an electrical charge, your hair stands on end, or your
            skin begins to tingle, lightning may be about to strike you – Drop
            to the ground immediately
        </li>
        <li className="my-2">
            If someone is struck by lightning, call 911, start mouth-to-mouth
            and cardiopulmonary resuscitation immediately .
        </li>
      </ul>
      <br />
      <h4 className="text-2xl my-8">
        <b>
          WAIT AT LEAST 30 MINUTES AFTER HEARING THE LAST THUNDER BEFORE LEAVING
          SHELTER
        </b>{" "}
      </h4>
    </article>
  );
}
