export default function SubHero() {
  return (
    <article className="m-4 lg:w-10/12 lg:mx-auto">
      <h1 className="text-blue-700 text-3xl lg:text-5xl text-center font-semibold italic mt-6">
        Uniting Youth. Building Strength. Empowering Community.
      </h1>
      <div className="flex-wrap">
        <div className="lg:flex lg:flex-col">
          <h2 className="text-2xl lg:text-3xl font-semibold mt-8">Why SYAA?</h2>
          <aside className="lg:mb-4">Suffolk Youth Athletic Association</aside>
          <iframe
            src="https://player.vimeo.com/video/464528560?h=b104bb1c15&autoplay=1&muted=1&loop=1"
            width="640"
            height="360"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="SYAA Facilities - Aerial Overhead Video"
            className="lg:w-[640px] lg:h-[360px] w-[400px] h-[250px]"
          ></iframe>
          <p className="font-semibold italic mb-8">
            <a href="https://vimeo.com/464528560">
              SYAA Facilities - Aerial Overhead Video
            </a>{" "}
            from <a href="https://vimeo.com/user124386006">SYAA</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
        </div>
        <div className=" min-w-10/12">
          <p className="leading-loose text-xl">
            SYAA understands the importance of quality time, that’s why we’re
            proud to be the only club in Tidewater where you can play 3 youth
            sports in one location. This allows our families to spend less time
            driving from place to place, and more time on the field.
          </p>
          <br></br>
          <p className=" leading-loose text-xl">
            We’re focused on giving every child a chance to play, learn, and
            experience the joys of a team sport. We make sure to stay up-to-date
            on new practices, regularly sending our coaches to nationally
            approved courses. We’re also all-volunteer operated and welcome
            parent involvement in running our programs.
          </p>
          <a href="/about-page" className="block my-8 text-xl w-fit border-2 border-blue-700 w-fit p-4 transition duration-300 linear hover:text-white hover:bg-blue-700 hover:border-black">Read more about SYAA</a>
        </div>
      </div>
    </article>
  );
}
