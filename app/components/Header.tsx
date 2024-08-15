import Image from "next/image";
import {ar} from "./lib/fonts";

export default function Header() {
    return (
        <nav className={`${ar.className} flex items-center justify-around lg:h-[250px] bg-[#0066CC]`}>
            <a href="/"><Image src={"/logo.svg"} width={150} height={150} alt="logo for SYAA"/></a>
            <ul className="hidden lg:flex justify-evenly lg:w-7/12 text-[#F0F0F0] text-3xl font-semibold">
                <li className="transition duration-300 linear hover:underline hover:text-red-500"><a href="/about">About SYAA</a></li>
                <li className="transition duration-300 linear hover:underline hover:text-red-500"><a href="/volunteer">Volunteer</a></li>
                <li className="transition duration-300 linear hover:underline hover:text-red-500"><a target="_blank" rel="noopener noreffer" href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/1954&app_name=Suffolk+Youth+Athletic+Association&portalid=1954&instancekey=clubs">Register Now</a></li>
            </ul>
        </nav>
    )
}