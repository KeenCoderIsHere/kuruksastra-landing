'use client'
import React from "react";
import Image from "next/image";
import CustBox from "./Sponsor_comp/CustBox";
import { alfa } from "@/app/layout";

const Sponsors = () => {
  const sponsList = [
    "/sponsors/2IIM.png",
    "/sponsors/AIRTEL.png",
    "/sponsors/Bharath snacks.png",
    "/sponsors/CUB.png",
    "/sponsors/Dark Town Gamerz.png",
    "/sponsors/Falooda Shop.png",
    "/sponsors/Finlatics.png",
    "/sponsors/Hazelvous Naturals.png",
    "/sponsors/idp.png",
    "/sponsors/Koblerr.png",
    "/sponsors/Mask group.png",
    "/sponsors/LA Sizzlers.png",
    "/sponsors/Magoosh.png",
    "/sponsors/mrf_sponsor.png",
    "/sponsors/pepsi.png",
    "/sponsors/roshan-removebg-preview.png",
    "/sponsors/TVS Motor Company.png",
    "/sponsors/urban_pots-removebg-preview.png",
    "/sponsors/Veranda.png",
  ];

  return (
    <div id="sponsorship" className="Sponsor w-full flex justify-center overflow-hidden">

      {/* CONTENT WRAPPER */}
      <div className="relative w-[100vw] min-h-[550px] md:min-h-[600px]">

        {/* Top Row */}
        {/* Top Row - Full Width Grid */}
        {/* Top Row - Full Width Grid */}
        {/* Top Row - Full Width Grid */}
        <div className="grid grid-cols-5 w-full border-t-2 border-[#756C1A]">
          <CustBox wid={310} hei={162} src={sponsList[3]} className="border-l-2 border-[#756C1A] w-full" />
          <CustBox wid={310} hei={162} src={sponsList[1]} className="w-full" />

          {/* Logo in the middle */}
          <CustBox wid={310} hei={162} src={sponsList[10]} className="w-full !border-b-0" />

          <CustBox wid={310} hei={162} src={sponsList[14]} className="w-full" />
          <CustBox wid={310} hei={162} src={sponsList[8]} className="w-full" />
        </div>

        {/* Title */}
        <p
          className={`${alfa.className}
          absolute left-1/2 -translate-x-1/2
          top-[45%] md:top-[54%] -translate-y-1/2 -mt-[80px]
          text-[26px] sm:text-[40px] md:text-[62px] lg:text-[80px]
          leading-none text-[#4B2E05] whitespace-nowrap z-10`}
        >
          PREVIOUS SPONSORS
        </p>

        {/* Middle Row */}
        <div className="flex bottom-[7] absolute w-full left-1/2 
        -translate-x-1/2 -translate-y-6/5  
        sm:bottom-[6px] md:bottom-[-95px] lg:bottom-[-95px] border-t-2 border-[#756C1A]">
          <CustBox wid={310} hei={162} src={sponsList[18]} />
          <CustBox wid={310} hei={162} src={sponsList[0]} />
          <CustBox wid={310} hei={162} src={sponsList[12]} />
          <CustBox wid={310} hei={162} src={sponsList[16]} />
          <CustBox wid={310} hei={162} src={sponsList[6]} />
        </div>

        {/* Bottom Sponsors */}
        <div
          className="
            absolute bottom-[0px] w-full
            hidden
            md:grid
            md:grid-cols-9 
            md:justify-items-center
            md:justify-center
            translate-y-[-3px]
            border-t-1 border-[#756C1A]
          "
        >
          <CustBox wid={200} hei={100} src={sponsList[2]} />
          <CustBox wid={170} hei={100} src={sponsList[17]} />
          <CustBox wid={170} hei={100} src={sponsList[5]} />
          <CustBox wid={170} hei={100} src={sponsList[13]} />
          <CustBox wid={180} hei={100} src={sponsList[15]} />
          <CustBox wid={170} hei={100} src={sponsList[9]} />
          <CustBox wid={170} hei={100} src={sponsList[11]} />
          <CustBox wid={170} hei={100} src={sponsList[4]} />
          <CustBox wid={200} hei={100} src={sponsList[7]} />
        </div>
        {/* Bottom Sponsors - Mobile */}
        <div
          className="
    absolute bottom-[0px] w-full
    flex flex-wrap justify-center
    md:hidden
    translate-y-[-3px]
    border-t-2 border-[#756C1A]
  "
        >
          <div className="w-1/5"><CustBox wid={200} hei={100} src={sponsList[2]} /></div>
          <div className="w-1/5"><CustBox wid={170} hei={100} src={sponsList[17]} /></div>
          <div className="w-1/5"><CustBox wid={170} hei={100} src={sponsList[5]} /></div>
          <div className="w-1/5"><CustBox wid={170} hei={100} src={sponsList[13]} /></div>
          <div className="w-1/5"><CustBox wid={180} hei={100} src={sponsList[15]} /></div>

          <div className="w-1/5 border-l-2 border-[#756C1A]"><CustBox wid={170} hei={100} src={sponsList[9]} /></div>
          <div className="w-1/5"><CustBox wid={170} hei={100} src={sponsList[11]} /></div>
          <div className="w-1/5"><CustBox wid={170} hei={100} src={sponsList[4]} /></div>
          <div className="w-1/5"><CustBox wid={200} hei={100} src={sponsList[7]} /></div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
