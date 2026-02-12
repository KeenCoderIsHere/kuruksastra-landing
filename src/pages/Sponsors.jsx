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
    "/sponsors/MRP Vapo Cure Paints.png",
    "/sponsors/pepsi.png",
    "/sponsors/Roshan Bag.png",
    "/sponsors/TVS Motor Company.png",
    "/sponsors/Urban Pots.png",
    "/sponsors/Veranda.png",
  ];

  return (
    <div className="Sponsor w-full flex justify-center overflow-hidden">

      {/* CONTENT WRAPPER */}
      <div className="relative w-[100vw] min-h-[720px]">

        {/* Top Row */}
        <div className="flex justify-center">
          <CustBox wid={310} hei={162} src={sponsList[3]} />
          <CustBox wid={310} hei={162} src={sponsList[1]} />

          <div className="w-[310px] h-[161px] flex items-center justify-center ">
            <Image
              src={sponsList[10]}
              alt="KS Logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>

          <CustBox wid={310} hei={162} src={sponsList[18]} />
          <CustBox wid={310} hei={162} src={sponsList[14]} />
        </div>

        {/* Title */}
        <p
          className={`${alfa.className}
          absolute left-1/2 -translate-x-1/2 -translate-x-1/2
          top-[250px]
          text-[26px] sm:text-[40px] md:text-[54px] lg:text-[72px]
          leading-none text-[#4B2E05] whitespace-nowrap`}
        >
          PREVIOUS SPONSORS
        </p>

        {/* Middle Row */}
        <div className="flex bottom-[7] absolute w-full left-1/2 
        -translate-x-1/2 -translate-y-6/5  
        sm:bottom-[6px] md:bottom-[-95px] lg:bottom-[-95px]">
          <CustBox wid={310} hei={162} src={sponsList[8]} />
          <CustBox wid={310} hei={162} src={sponsList[0]} />
          <CustBox wid={310} hei={162} src={sponsList[12]} />
          <CustBox wid={310} hei={162} src={sponsList[16]} />
          <CustBox wid={310} hei={162} src={sponsList[6]} />
        </div>

        {/* Bottom Sponsors */}
        <div
          className="
            absolute bottom-[1px] w-full
            grid
            grid-cols-5
            md:grid-cols-9 
            justify-items-center
          "
        >
          <CustBox wid={200} hei={100} src={sponsList[2]} />
          <CustBox wid={170} hei={100} src={sponsList[17]} />
          <CustBox wid={170} hei={100} src={sponsList[5]} />
          <CustBox wid={170} hei={100} src={sponsList[4]} />
          <CustBox wid={180} hei={100} src={sponsList[15]} />
          <CustBox wid={170} hei={100} src={sponsList[7]} />
          <CustBox wid={170} hei={100} src={sponsList[11]} />
          <CustBox wid={170} hei={100} src={sponsList[13]} />
          <CustBox wid={200} hei={100} src={sponsList[9]} />
        </div>

      </div>
    </div>
  );
};

export default Sponsors;
