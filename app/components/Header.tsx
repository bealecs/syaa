import Image from "next/image";

export default function Header() {
    return (
        <nav className="flex items-center justify-around lg:h-[250px] bg-blue-300">
            <Image src={"/logo.svg"} width={150} height={150} alt="logo for SYAA"/>
            <ul className="hidden lg:flex justify-evenly lg:w-5/12 text-red-700 text-3xl font-semibold">
                <li className="transition duration-500 linear hover:underline hover:text-red-800">About SYAA</li>
                <li className="transition duration-500 linear hover:underline hover:text-red-800">Volunteer</li>
                <li className="transition duration-500 linear hover:underline hover:text-red-800">Forms/Documents</li>
            </ul>
        </nav>
    )
}