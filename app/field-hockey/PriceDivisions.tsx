export default function PriceDivisions() {
    return (
      <div>
        <h3 className="text-4xl font-semibold text-blue-700">
          Pricing Plans per Division
        </h3>
        <h4 className="text-xl font-semibold mt-2">
          SYAA is pleased to offer Field Hockey at all levels from 7u-19u. No matter what age or skill level of your child, we have a team
          for them!
        </h4>
        <button className="px-2 my-4 transition duration-300 linear hover:bg-blue-700 hover:text-white border-2 border-blue-700 text-blue-700 rounded-full">
          <a href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/1954&app_name=Suffolk+Youth+Athletic+Association&portalid=1954&instancekey=clubs" target="_blank" rel="noopener noreffer">Register Now</a>
        </button>
        <div className="h-[50vh] flex justify-center my-12 items-center">
          <div className="min-h-[80%] border-4 border-blue-700 w-3/12 border-r-0">
            <h4 className="text-3xl text-blue-700 font-semibold text-center mt-4">
              Elementary
            </h4>
            <p className="text-center text-sm">7u-9u</p>
            <hr />
            <p className="text-6xl text-blue-700 text-center mt-12 mb-8">
              <span className="text-3xl text-black">$</span>99
              <span className="text-3xl text-black">/ season</span>
            </p>
            
          </div>
          <div className="min-h-[100%] border-4 border-blue-700 rounded-md w-3/12">
            <h4 className="text-3xl text-blue-700 font-semibold text-center mt-4">
              Middle
            </h4>
            <p className="text-center text-sm">10u-12u</p>
            <hr />
            <p className="border-2 rounded-full px-4 my-4 border-blue-700 text-blue-700 w-fit text-center mx-auto">
              Most popular
            </p>
            <p className="text-6xl text-blue-700 text-center mt-12 mb-8">
              <span className="text-3xl text-black">$</span>99
              <span className="text-3xl text-black">/ season</span>
            </p>
            <p className="mx-2 text-xl">
            Camp will be a mix of skill training and scrimmages aimed at developing players overall abilities.  Goalkeeper training will be provided as part of the program if there is sufficient interest.
            </p>
          </div>
          <div className="min-h-[80%] border-4 border-blue-700 w-3/12 border-l-0">
            <h4 className="text-3xl text-blue-700 font-semibold text-center mt-4">
              High School
            </h4>
            <p className="text-center text-sm">13u-19u</p>
            <hr />
            <p className="text-6xl text-blue-700 text-center mt-12 mb-8">
              <span className="text-3xl text-black">$</span>99
              <span className="text-3xl text-black">/ season</span>
            </p>
            
          </div>
        </div>
      </div>
    );
  }
  