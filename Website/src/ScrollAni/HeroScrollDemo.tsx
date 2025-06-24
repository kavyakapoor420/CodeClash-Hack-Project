"use client";
import React from "react";
import { ContainerScroll } from '../Components/Ui/Container-scroll-animation'
// import BetterWebImage from '../Images/Betterweb.png';


export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-6xl font-semibold text-red-500 dark:text-green-500">
              BetterWeb is <br />
              <span className="text-4xl md:text-[3rem] font-bold mt-1 leading-none">
                Designed to enhance web accessibilty
              </span>
            </h1>
          </>
        }
      >
        <img
          // src={BetterWebImage}
          src=""
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
