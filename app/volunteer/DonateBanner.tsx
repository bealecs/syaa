"use client";
import Styles from "./DonateBanner.module.css";
import { ar } from "../components/lib/fonts";
import { useState } from "react";

export default function DonateBanner() {
  const [closeBanner, setCloseBanner] = useState<boolean>(false);
  return (
    <>
      {!closeBanner ? (
        <div
          className={`${ar.className} bg-green-200 flex justify-end items-center content-center py-4`}
        >
          <a
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=M5ZK5XWQF7QAY&ssrt=1723503674404"
            target="_blank"
            rel="noopener noreffer"
          >
            <h1
              className={`${Styles.animateMoveRight} text-xl lg:text-5xl text-green-900`}
            >
              Click here to donate to SYAA
            </h1>
          </a>
          <button
            onClick={() => setCloseBanner(!closeBanner)}
            className="text-xl lg:text-5xl text-red-800 mr-4"
          >
            X
          </button>{" "}
        </div>
      ) : null}
    </>
  );
}
