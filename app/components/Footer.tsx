import { ar } from "./lib/fonts";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
    <section className={`${ar.className} p-4 border-t-2 flex bg-[#0066CC] text-[#F0F0F0] justify-evenly`}>
      <div className="flex-col mb-4">
        <h4 className="text-2xl lg:text-3xl font-semibold">Resources</h4>
        <ul className="flex space-x-4">
          <div className="flex flex-col space-y-2 w-40">
            <li><a href="/location">Location</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/lightning-policy">Lightning Policy</a></li>
          </div>
          <div className="flex flex-col space-y-2 w-40">
            <li><a href="/volunteer">Volunteer</a></li>
            <li><a href="/scholarships">Scholarships</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/important-documents">Documents</a></li>
          </div>
        </ul>
      </div>
      <div className="flex-col mb-4">
        <h4 className="text-2xl lg:text-3xl font-semibold">Links</h4>
        <ul className="flex space-x-4">
          <div className="flex flex-col space-y-2 w-50">
            <li><a href="https://www.facebook.com/SYAASoccer/" target="_blank" rel="noopener noreffer">Facebook - Soccer</a></li>
            <li><a href="https://twitter.com/SYAAsuffolkfc" target="_blank" rel="noopener noreffer">Twitter - Soccer</a></li>
            <li><a href="https://www.facebook.com/SuffolkYouthAthleticAssociationBaseballSoftball/" target="_blank" rel="noopener noreffer">Facebook - Baseball & Softball</a></li>
          </div>
        </ul>
      </div>
    </section>
    <h4 className="bg-[#0066CC] text-[#F0F0F0] text-center">©{currentYear} SYAA. All Rights Reserved.</h4>
    <h4 className="bg-[#0066CC] text-[#F0F0F0] text-center">Created and maintained by <a href="https://clifcodes.dev" target="blank" rel="noopener noreffer" className="underline">Clif Codes</a></h4>
    </>
  );
}
