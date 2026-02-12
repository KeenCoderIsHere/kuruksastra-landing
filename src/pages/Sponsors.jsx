import React from "react";
import Image from "next/image";
import Boxes from "./Sponsor_comp/Box";
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
    <div className="Sponsor flex flex-wrap absolute overflow justify-center">

      <div className="flex">
        <CustBox wid={310} hei={162} src={sponsList[3]} />
        <CustBox wid={310} hei={162} src={sponsList[1]} />

        <div className="w-[310px] h-[161px] flex items-center justify-center">
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

     
      <p
        className={`${alfa.className} absolute top-[210px] left-1/2 -translate-x-1/2 text-[78px] leading-none text-[#4B2E05] whitespace-nowrap`}
      >
        PREVIOUS SPONSORS
      </p>

      <div className="flex absolute top-[342px]">
        <CustBox wid={300} hei={162} src={sponsList[8]} />
        <CustBox wid={300} hei={162} src={sponsList[0]} />
        <CustBox wid={300} hei={162} src={sponsList[12]} />
        <CustBox wid={300} hei={162} src={sponsList[16]} />
        <CustBox wid={310} hei={162} src={sponsList[6]} />
      </div>

      <div className="bottom-[0] absolute flex">
        <CustBox wid={180} hei={100} src={sponsList[2]} />
        <CustBox wid={160} hei={100} src={sponsList[17]} />
        <CustBox wid={150} hei={100} src={sponsList[5]} />
        <CustBox wid={160} hei={100} src={sponsList[4]} />
        <CustBox wid={180} hei={100} src={sponsList[15]} />
        <CustBox wid={160} hei={100} src={sponsList[7]} />
        <CustBox wid={150} hei={100} src={sponsList[11]} />
        <CustBox wid={170} hei={100} src={sponsList[13]} />
        <CustBox wid={180} hei={100} src={sponsList[9]} />
      </div>
    </div>
  );
};

export default Sponsors;
