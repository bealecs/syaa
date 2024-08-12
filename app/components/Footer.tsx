import { ar } from "../lib/fonts";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <>
    <section className={`${ar.className} border-t-2 flex bg-blue-200 text-blue-800 justify-evenly`}>
      <div className="flex-col mb-4">
        <h4 className="text-3xl font-semibold">Resources</h4>
        <ul className="flex space-x-4">
          <div className="flex flex-col space-y-2 w-40">
            <li>Location</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Lightning policy</li>
          </div>
          <div className="flex flex-col space-y-2 w-40">
            <li>Volunteer</li>
            <li>Scholarships</li>
            <li>Refund Policy</li>
          </div>
        </ul>
      </div>
      <div className="flex-col mb-4">
        <h4 className="text-3xl font-semibold">Links</h4>
        <ul className="flex space-x-4">
          <div className="flex flex-col space-y-2 w-50">
            <li>Facebook - Soccer</li>
            <li>Twitter - Soccer</li>
            <li>Facebook - Baseball & Softball</li>
          </div>
        </ul>
      </div>
    </section>
    <h4 className="bg-blue-200 text-blue-800 text-center">©{currentYear} SYAA. All Rights Reserved.</h4>
    <h4 className="bg-blue-200 text-blue-800 text-center">Powered by <a href="https://clifcodes.dev" target="blank" rel="noopener noreffer" className="underline">Clif Codes</a></h4>
    </>
  );
}
