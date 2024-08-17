import BaseballHelmet from "../components/lib/svg-components/BaseballHelmet";
import Deal from "../components/lib/svg-components/Deal";
import Gardener from "../components/lib/svg-components/Gardener";
import Group from "../components/lib/svg-components/Group";
import Hammer from "../components/lib/svg-components/Hammer";
import Meeting from "../components/lib/svg-components/Meeting";
import Referee from "../components/lib/svg-components/Referee";
import Stall from "../components/lib/svg-components/Stall";

interface Opportunity {
  name: string;
  role: string;
  imageUrl: React.ReactNode;
}

const opportunities: Opportunity[] = [
  {
    name: "Property & Equipment Maintenance",
    role: "Building upkeep, cleaning, and minor repairs",
    imageUrl: <Hammer />,
  },
  {
    name: "General Field Maintenance",
    role: "Cutting grass, lining fields, installing goal nets, etc.",
    imageUrl: <Gardener />,
  },
  {
    name: "Concession Stand Duty",
    role: "Management or staffing of food production",
    imageUrl: <Stall />,
  },
  {
    name: "Equipment Managers",
    role: "Maintain stock of inventory for teams",
    imageUrl: <BaseballHelmet />,
  },
  {
    name: "Team Managers",
    role: "Assists coaches w/team organization & communication",
    imageUrl: <Group />,
  },
  {
    name: "Sponsorship Outreach",
    role: "Help promote SYAA to potential sponsors or advertisers",
    imageUrl: <Deal />,
  },
  {
    name: "SYAA Board of Directors (all sports)",
    role: "Assist in running the SYAA organization",
    imageUrl: <Meeting />,
  },
  {
    name: "Support Referee Training",
    role: "In-house, youth referee training program",
    imageUrl: <Referee />,
  },
];

export default function OpenerComponent() {
  return (
    <div className="py-8">
      <div className="mx-auto grid max-w-9xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">
            Get Involved w/SYAA
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SYAA relies on volunteers for everything we do. Let us know if
            you’re interested in helping out in anyway, and we’ll find a fit for
            you!
          </p>
          <button className="my-12 transition duration-300 linear hover:text-white hover:bg-blue-700 hover:border-black border-2 border-blue-700 text-xl p-4 w-full">
            <a href="mailto:suffolkscorpions@gmail.com">I can help!</a>
          </button>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {opportunities.map((opportunity) => (
            <li key={opportunity.name}>
              <div className="flex items-center gap-x-6">
                {opportunity.imageUrl}
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {opportunity.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-blue-700">
                    {opportunity.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr className="mt-8" />
    </div>
  );
}
