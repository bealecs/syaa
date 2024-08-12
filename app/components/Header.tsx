import Image from "next/image";
import {ar} from "./lib/fonts";

export default function Header() {
    return (
        <nav className={`${ar.className} flex items-center justify-around lg:h-[250px] bg-[#0066CC]`}>
            <Image src={"/logo.svg"} width={150} height={150} alt="logo for SYAA"/>
            <ul className="hidden lg:flex justify-evenly lg:w-7/12 text-[#F0F0F0] text-3xl font-semibold">
                <li className="transition duration-300 linear hover:underline hover:text-red-500"><a href="/about">About SYAA</a></li>
                <li className="transition duration-300 linear hover:underline hover:text-red-500"><a href="/volunteer">Volunteer</a></li>
                <li className="transition duration-300 linear hover:underline hover:text-red-500">Forms/Documents</li>
                <li className="transition duration-300 linear hover:underline hover:text-red-500">Register Now</li>
            </ul>
        </nav>
    )
}