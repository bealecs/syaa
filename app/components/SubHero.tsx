import { gluten } from "../lib/fonts";

export default function SubHero() {
  return (
    <article className={`${gluten.className} w-10/12 mx-auto`}>
      <h1 className="text-blue-700 text-5xl text-center font-semibold italic mt-6">
        Uniting Youth. Building Strength. Empowering Community.
      </h1>
      <div className="flex">
        <div className="flex flex-col">
        <h2 className="text-3xl font-semibold mt-8">Why SYAA?</h2>
        <aside className="mb-4">Suffolk Youth Athletic Association</aside>
          <iframe
            src="https://player.vimeo.com/video/464528560?h=b104bb1c15"
            width="640"
            height="360"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="font-semibold italic mb-8">
            <a href="https://vimeo.com/464528560">
              SYAA Facilities - Aerial Overhead Video
            </a>{" "}
            from <a href="https://vimeo.com/user124386006">SYAA</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
        </div>
        <div className="mt-12">
          <p className="mx-8 leading-loose text-xl">
            SYAA understands the importance of quality time, that’s why we’re
            proud to be the only club in Tidewater where you can play 3 youth
            sports in one location. This allows our families to spend less time
            driving from place to place, and more time on the field.
          </p>
          <br></br>
          <p className="mx-8 leading-loose text-xl">
            We’re focused on giving every child a chance to play, learn, and
            experience the joys of a team sport. We make sure to stay up-to-date
            on new practices, regularly sending our coaches to nationally
            approved courses. We’re also all-volunteer operated and welcome
            parent involvement in running our programs.
          </p>
          <br />
          <p className="mx-8 leading-loose text-xl">
            Started in 1981, SYAA has been providing sports and athletic
            programs for 40 years. With almost 1,800 registered players,
            certified coaches and referees, and a focus on sportsmanship, SYAA
            is a true community institution.
          </p>
        </div>
      </div>
      <a href="/about" className="block my-8 w-fit mx-auto border-2 p-4 rounded-md bg-blue-700 text-white border-gray-400 hover:border-black transition duration-300 linear hover:text-black">Read more about SYAA</a>
    </article>
  );
}
