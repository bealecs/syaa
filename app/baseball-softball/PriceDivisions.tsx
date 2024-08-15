export default function PriceDivisions() {
    return (
      <div>
        <h3 className="text-4xl font-semibold text-blue-700">
          Pricing Plans per Division
        </h3>
        <h4 className="text-xl font-semibold mt-2">
          SYAA is pleased to offer baseball & softball at all levels from recreational to
          travel. No matter what age or skill level of your child, we have a team
          for them!
        </h4>
        <button className="px-2 my-4 transition duration-300 linear hover:bg-blue-700 hover:text-white border-2 border-blue-700 text-blue-700 rounded-full">
          <a href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/1954&app_name=Suffolk+Youth+Athletic+Association&portalid=1954&instancekey=clubs" target="_blank" rel="noopener noreffer">Register Now</a>
        </button>
        <div className="h-[50vh] flex justify-center my-12 items-center">
          <div className="min-h-[80%] border-4 border-blue-700 w-3/12 border-r-0">
            <h4 className="text-3xl text-blue-700 font-semibold text-center mt-4">
              All-Star Division
            </h4>
            <p className="text-center text-sm">High level</p>
            <hr />
            <p className="text-6xl text-blue-700 text-center mt-12 mb-8">
              <span className="text-3xl text-black">$</span>140
              <span className="text-3xl text-black">/ season</span>
            </p>
            <p className="mx-2">
              Our all-star baseball program was created as an alternative for
              players who want to remain in recreational baseball but play at a
              higher level of skill and competition.
            </p>
          </div>
          <div className="min-h-[100%] border-4 border-blue-700 rounded-md w-3/12">
            <h4 className="text-3xl text-blue-700 font-semibold text-center mt-4">
              Recreational League
            </h4>
            <p className="text-center text-sm">Price varies with age</p>
            <hr />
            <p className="border-2 rounded-full px-4 my-4 border-blue-700 text-blue-700 w-fit text-center mx-auto">
              Most popular
            </p>
            <p className="text-6xl text-blue-700 text-center mt-12 mb-8">
              <span className="text-3xl text-black">$</span>50-130
              <span className="text-3xl text-black">/ season</span>
            </p>
            <p className="mx-2 text-xl">
              Recreational league play is for players of all abilities and teaches
              children the fun of competitive sports. All participants are
              welcomed and are provided equal playing opportunities.
            </p>
          </div>
          <div className="min-h-[80%] border-4 border-blue-700 w-3/12 border-l-0">
            <h4 className="text-3xl text-blue-700 font-semibold text-center mt-4">
              Select Travel
            </h4>
            <p className="text-center text-sm">Competitive</p>
            <hr />
            <p className="text-6xl text-blue-700 text-center mt-12 mb-8">
              <span className="text-3xl text-black">$</span>160
              <span className="text-3xl text-black">/ season</span>
            </p>
            <p className="mx-2">
              A competitive training and match environment for players between the
              ages of 8 and 19 who meet minimum standards as set by our director
              of coaching and coaching staff.
            </p>
          </div>
        </div>
      </div>
    );
  }
  