"use client";
import Image from "next/image";
import { ar } from "./lib/fonts";
import { useState } from "react";

export default function Header() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [sportsClicked, setSportsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  const handleSportsClick = () => {
    setSportsClicked(!sportsClicked);
  };

  return (
    <nav
    className={`${ar.className} top-0 z-[1000] sticky lg:static flex items-center justify-between lg:justify-evenly lg:h-[250px] bg-[#0066CC] p-4`}
  >
  
  
      <a href="/">
        <Image src={"/logo.svg"} width={150} height={150} alt="logo for SYAA" />
      </a>

      <button onClick={handleClick} className="block md:hidden">
        {hamburgerClicked ? (
          <Image
            src={"/Close.svg"}
            alt="hamburger menu icon"
            height={50}
            width={50}
          />
        ) : (
          <Image
            src={"/Menu.svg"}
            alt="hamburger menu icon"
            height={50}
            width={50}
          />
        )}
      </button>

      <ul
        className={`${
          hamburgerClicked ? "block" : "hidden"
        } absolute top-[140px] left-0 w-full bg-[#0066CC] text-center md:hidden`}
      >
        <li className="p-4 border-b border-gray-300">
          <button
            onClick={handleSportsClick}
            className="text-[#F0F0F0] text-xl font-semibold hover:text-red-500"
          >
            {sportsClicked ? <><span className="mx-2">&#x25C0;</span>Back</> : <>Sports <span className="text-sm">&#9660;</span></>}
          </button>
        </li>
        <li className="p-4 border-b border-gray-300">
          <a
            href={sportsClicked ? "/soccer" : "/about"}
            className="text-[#F0F0F0] text-xl font-semibold hover:text-red-500"
          >
            {sportsClicked ? "Soccer" : "About SYAA"}
          </a>
        </li>
        <li className="p-4 border-b border-gray-300">
          <a
            href={sportsClicked ? "/baseball-softball" : "/volunteer"}
            className="text-[#F0F0F0] text-xl font-semibold hover:text-red-500"
          >
            {sportsClicked ? "Baseball/Softball" : "Volunteer"}
          </a>
        </li>
        <li className="p-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={sportsClicked ? "/field-hockey" : "https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/1954&app_name=Suffolk+Youth+Athletic+Association&portalid=1954&instancekey=clubs"}
            className="text-[#F0F0F0] text-xl font-semibold hover:text-red-500"
          >
            {sportsClicked ? "Field Hockey" : "Register Now"}
          </a>
        </li>
      </ul>

      <ul className="hidden md:flex justify-evenly lg:w-7/12 text-[#F0F0F0] text-3xl font-semibold">
        <li className="transition duration-300 linear hover:underline hover:text-red-500">
          <a href="/about">About SYAA</a>
        </li>
        <li className="transition duration-300 linear hover:underline hover:text-red-500">
          <a href="/volunteer">Volunteer</a>
        </li>
        <li className="transition duration-300 linear hover:underline hover:text-red-500">
          <a
            target="_blank"
            rel="noopener noreffer"
            href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/1954&app_name=Suffolk+Youth+Athletic+Association&portalid=1954&instancekey=clubs"
          >
            Register Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
