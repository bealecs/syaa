"use client";

import Image from "next/image";
import { useState } from "react";
import {ar} from "../components/lib/fonts";
import PageBackButton from "../components/lib/PageBackButton";
import Viber from "../components/lib/svg-components/Viber";
import Email from "../components/lib/svg-components/Email";
import Logo from "../components/lib/svg-components/Logo";

export default function Contact() {
  const [contactNumber, setContactNumber] = useState<number>(0);

  const handleAddition = () => {
    if (contactNumber < 2) {
      setContactNumber(contactNumber + 1);
    } else {
      setContactNumber(0);
    }
  };
  const handleSubtraction = () => {
    if (contactNumber > 0) {
      setContactNumber(contactNumber - 1);
    } else {
      setContactNumber(2);
    }
  };

  switch (contactNumber) {
    case 0:
      return (
        <div className={`${ar.className} m-4 min-h-[75vh] lg:w-10/12 lg:mx-auto`}>
            <PageBackButton href="/" text="Back to main page" />
          <h1 className="text-center text-blue-700 text-5xl my-12">Point of Contact</h1>
          <div className="mx-auto my-12 justify-evenly items-center content-center flex">
            <button
              onClick={handleSubtraction}
              className="border-2 p-2 rounded-full text-3xl bg-slate-200 text-blue-700"
            >
              {"<"}
            </button>
            <div className="bg-slate-200 min-h-[40vh] lg:w-5/12 w-9/12 rounded-md">
              <Image src={"/logo.svg"} alt="SYAA Logo" height={150} width={150} className="mx-auto"/>
              <h2 className="text-center text-blue-700 text-3xl font-bold">Soccer</h2>
              <h4 className="text-center font-semibold text-xl">Vito Basile</h4>
              <div className="flex content-center items-center m-8">
              <div className="hidden lg:block">
                <Viber />
              </div>
                <p className="mx-4 lg:text-2xl">(757) 319-9415</p>
              </div>
              <div className="flex content-center items-center m-8 ">
              <div className="hidden lg:block">
                <Email />
              </div>
                <p className="mx-4 lg:text-xl">SuffolkScorpions@gmail.com</p>
              </div>
            </div>
            <button
              onClick={handleAddition}
              className="border-2 p-2 rounded-full text-3xl bg-slate-200 text-blue-700"
            >
              {">"}
            </button>
          </div>
        </div>
      );
    case 1:
      return (
        <div className={`${ar.className} m-4 min-h-[75vh] lg:w-10/12 lg:mx-auto`}>
          <PageBackButton href="/" text="Back to main page" />
          <h1 className="text-center text-blue-700 text-5xl my-12">Point of Contact</h1>
          <div className="mx-auto my-12 justify-evenly items-center content-center flex">
            <button
              onClick={handleSubtraction}
              className="border-2 p-2 rounded-full text-3xl bg-slate-200 text-blue-700"
            >
              {"<"}
            </button>
            <div className="bg-slate-200 min-h-[40vh] lg:w-5/12 w-9/12 rounded-md">
              <div className="mx-auto">
                <Logo />
              </div>
              <h2 className="text-center text-blue-700 text-3xl font-bold">Baseball/Softball</h2>
              <h4 className="text-center font-semibold text-xl">Joe Bidnick</h4>
              <div className="flex content-center items-center m-8">
              <div className="hidden lg:block">
                <Viber />
              </div>
                <p className="mx-4 lg:text-2xl">(757) 763-0032</p>
              </div>
              <div className="flex content-center items-center m-8 ">
              <div className="hidden lg:block">
                <Email />
              </div>
                <p className="mx-4 lg:text-xl">jbid621@gmail.com</p>
              </div>
            </div>
            <button
              onClick={handleAddition}
              className="border-2 p-2 rounded-full text-3xl bg-slate-200 text-blue-700"
            >
              {">"}
            </button>
          </div>
        </div>
      );
    case 2:
      return (
        <div className={`${ar.className} m-4 min-h-[75vh] lg:w-10/12 lg:mx-auto`}>
          <PageBackButton href="/" text="Back to main page" />
          <h1 className="text-center text-blue-700 text-5xl my-12">Point of Contact</h1>
          <div className="mx-auto my-12 justify-evenly items-center content-center  flex">
            <button
              onClick={handleSubtraction}
              className="border-2 p-2 rounded-full text-3xl bg-slate-200 text-blue-700"
            >
              {"<"}
            </button>
            <div className="bg-slate-200 min-h-[40vh] lg:w-5/12 w-9/12 rounded-md">
              <Image src={"/logo.svg"} alt="SYAA Logo" height={150} width={150} className="mx-auto"/>
              <h2 className="text-center text-blue-700 text-3xl font-bold">Field Hockey</h2>
              <h4 className="text-center font-semibold text-xl">Jazmyne Johnson / Sierra Chavis</h4>
              <div className="flex content-center items-center m-8">
              <div className="hidden lg:block">
                <Viber />
              </div>
                <p className="mx-4 lg:text-2xl">(757) 651-7367</p>
              </div>
              <div className="flex content-center items-center m-8 ">
                <div className="hidden lg:block">
                <Email />
                </div>
                <p className="mx-4 lg:text-xl">FieldHockey@syaasuffolkfc.org</p>
              </div>
            </div>
            <button
              onClick={handleAddition}
              className="border-2 p-2 rounded-full text-3xl bg-slate-200 text-blue-700"
            >
              {">"}
            </button>
          </div>
        </div>
      );
  }
}
