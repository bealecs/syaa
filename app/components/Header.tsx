import Image from "next/image";
import {ar} from "../lib/fonts";

export default function Header() {
    return (
        <nav className={`${ar.className} flex items-center justify-around lg:h-[250px] bg-blue-200`}>
            <Image src={"/logo.svg"} width={150} height={150} alt="logo for SYAA"/>
            <ul className="hidden lg:flex justify-evenly lg:w-5/12 text-blue-800 text-3xl font-semibold">
                <li className="transition duration-500 linear hover:underline hover:text-blue-900">About SYAA</li>
                <li className="transition duration-500 linear hover:underline hover:text-blue-900">Volunteer</li>
                <li className="transition duration-500 linear hover:underline hover:text-blue-900">Forms/Documents</li>
            </ul>
        </nav>
    )
}