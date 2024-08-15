export default function Coaching() {
  return (
    <div>
      <div className="bg-slate-200 p-4 rounded-md">
      <h2 className="text-4xl mt-4 text-blue-700">Coaching</h2>
      <p className="text-base">
        Coaches & Assistant Coaches are needed at all levels - recreational,
        advanced, and select travel. SYAA will provide training through
        nationally recognized programs if requested.
      </p>
      <p className="my-4 text-lg">Responsibilities of a coach:</p>
      <ul>
        <li className="my-2">
          <b>Manage teams at age levels U4 to U16</b>
        </li>
        <li className="my-2">
          <b>
            Run one practice per week and one game on Saturdays (All games and
            practices are held at SYAA’s fields)
          </b>
        </li>
        <li className="my-2">
          <b>
            Teach basic skills as outlined by the Director of Coaching. Training
            is available where requested
          </b>
        </li>
        <li className="my-2">
          <b>
            Communicate to team parents with help from your Asst. Coach and Team
            Manager
          </b>
        </li>
        <li className="my-2">
          <b>
            Display good sportsmanship and promote{" "}
            <a href="/about/#philosophy" className="text-blue-700 underline">
              SYAA’s philosophy
            </a>{" "}
            of everyone plays and has fun.
          </b>
        </li>
      </ul>
      </div>
      <div className="bg-slate-200 rounded-md p-4 my-8">
      <h2 className="text-4xl text-blue-700">
        Advanced Recreational Division Coaching
      </h2>
      <p className="text-base">
        In addition to the Recreational expectations above:
      </p>
      <ul>
        <li className="my-2">
          <b>Run practices 1 or 2 times a week and one game on Saturdays.</b>
        </li>
        <li className="my-2">
          <b>
            Participate in{" "}
            <a
              href="https://tasli.org/"
              target="_blank"
              rel="noopener noreffer"
              className="text-blue-700 underline"
            >
              Tidewater Advanced Soccer League
            </a>{" "}
            with travel to Hampton Roads and northern North Carolina for away
            matches on Saturdays.
          </b>
        </li>
        <li className="my-2">
          <b>Take part in new player evaluations</b>
        </li>
      </ul>
      </div>
      <div className="bg-slate-200 rounded-md my-8 p-4">
      <h2 className="text-4xl text-blue-700">Travel Coaches</h2>
      <p className="text-base">In addition to the requirements above:</p>
      <ul className="mb-8">
        <li className="my-2">
          <b>
            Set and run a weekly training schedule as suiting the team ambitions
          </b>
        </li>
        <li className="my-2">
          <b>Continue training and skill building in the off season</b>
        </li>
        <li className="my-2">
          <b>
            Coaching certifications expected and courses are paid for where
            needed
          </b>
        </li>
        <li className="my-2">
          <b>
            Equal playing time for players not required, but encouraged when
            possible.
          </b>
        </li>
      </ul>
      </div>
      
      <hr />
      <h4 className="text-3xl text-blue-700 mt-8">Sponsorship & Donations</h4>
      <p className="text-base">
        There are many opportunities for you to invest in our youth programs.{" "}
      </p>
      <ul className="mb-8">
        <li className="my-2">
          <b>
            <a
              className="text-blue-700 underline"
              href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=M5ZK5XWQF7QAY&ssrt=1723503674404"
              target="_blank"
              rel="noopener noreffer"
            >
              Make a donation to SYAA
            </a>{" "}
            - we rely on local support to continue operating!
          </b>
        </li>
        <li className="my-2">
          <b>
            Check out some of our sponsorship opportunities for more
            information. Please download the form, fill it out, and send to the
            address below.
          </b>
        </li>
        <li className="my-2 text-2xl">
          <b>
            Please make checks payable to SYAA and mail a copy of the form with
            your check to:
          </b>
        </li>
        <div className="text-center my-4 text-xl">
          <b>SYAA</b>
          <br />
          <b>PO Box 3081</b>
          <br />
          <b>Suffolk, VA 23439-3081</b>
        </div>
      </ul>
      <p className="text-center">Please <a href="mailto:suffolkscorpions@gmail.com" className="text-blue-700 underline">contact Vito</a> with any questions</p>
      <div className="flex justify-evenly">
        <button className="transition duration-300 linear hover:text-white hover:bg-blue-700 hover:border-black border-2 border-blue-700 text-xl p-4 w-fit my-8">
          <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=M5ZK5XWQF7QAY&ssrt=1723503674404" target="_blank" rel="noopener noreffer">
            Donate to SYAA
          </a>
        </button>
        <button className="transition duration-300 linear hover:text-white hover:bg-blue-700 hover:border-black border-2 border-blue-700 text-xl p-4 w-fit my-8">
          <a href="/advertisingSign.pdf" target="_blank">Advertising Sign Sponsorship</a>
        </button>
        <button className="transition duration-300 linear hover:text-white hover:bg-blue-700 hover:border-black border-2 border-blue-700 text-xl p-4 w-fit my-8">
          <a href="/teamSponsor.pdf" target="_blank">Team Sponsorship</a>
        </button>
      </div>
    </div>
  );
}
