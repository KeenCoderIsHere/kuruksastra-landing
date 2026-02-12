
import React from "react";
import Sponsors from "./Sponsors";
import Image from "next/image";
import { alfa, albert } from "@/app/layout";

const Footer = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      
      <Sponsors />

      <div className="Footer relative flex h-[500px] w-full">

        {/* Contact Us Title */}
        <p
          className={`${alfa.className} 
          absolute top-[60px] left-1/2 -translate-x-1/2
          text-[78px] leading-none whitespace-nowrap
          bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]
          bg-clip-text text-transparent`}
        >
          Contact us
        </p>

        {/* Core Committee */}
        <div className="absolute top-[160px] left-[80px] px-6 py-4 w-[650px]">
          
          <p
            className={`${albert.className} text-[32px] 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]`}
          >
            Core Committee
          </p>

          <div className="grid grid-cols-3 gap-y-6 gap-x-10 mt-3 text-white text-[20px]">
            <div>
              <p>Amirthavarshini R</p>
              <p className="text-[18px] opacity-90">+91 99529 64049</p>
            </div>

            <div>
              <p>Mukilan V M</p>
              <p className="text-[18px] opacity-90">+91 93844 37698</p>
            </div>

            <div>
              <p>Shanjay S</p>
              <p className="text-[18px] opacity-90">+91 96009 23014</p>
            </div>

            <div>
              <p>Amurtha K R</p>
              <p className="text-[18px] opacity-90">+91 93619 71610</p>
            </div>

            <div>
              <p>Rajeshwar P</p>
              <p className="text-[18px] opacity-90">+91 80724 37287</p>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className={`absolute top-[190px] right-[120px] text-left ${albert.className}`}>

          <p
            className="text-[28px] 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]"
          >
            Follow us
          </p>

          <div className="grid grid-cols-3 gap-4 mt-4 justify-items-center">
            <a href="https://www.instagram.com/kuruksastra?igsh=c3VrYWEwdXgydTNj" target="_blank">
              <Image src="/foo/insta.png" alt="Instagram" width={50} height={50}/>
            </a>

            <a href="https://www.facebook.com/kssastra/" target="_blank">
              <Image src="/foo/fb.png" alt="Facebook" width={50} height={50}/>
            </a>

            <a href="https://youtube.com/@sastrafotohub?si=MIuC5i2-YCzNgqCC" target="_blank">
              <Image src="/foo/youtube.png" alt="YouTube" width={50} height={50}/>
            </a>

            <a href="https://www.linkedin.com/company/kuruksastra/" target="_blank">
              <Image src="/foo/linkedin.png" alt="LinkedIn" width={50} height={50}/>
            </a>

            <a href="https://x.com/kssastra?t=m_rRvKLpVIyeU_rN9FSBiA&s=09" target="_blank">
              <Image src="/foo/tweet.png" alt="Twitter" width={50} height={50}/>
            </a>
          </div>
        </div>

        
        <Image
          src="/foo/Vector 2.png"
          alt="divider"
          width={1500}
          height={10}
          className="object-contain absolute bottom-[80px] left-0"
        />

      </div>
      <div className="absolute bottom-[-320] left-0 w-full flex justify-between px-20 text-white text-[20  px]">
  
  <p>@2026 kuruksastra</p>

  <p>Made with 🤍 by 300DPI & ACE</p>

</div>

    </div>
  );
};

export default Footer;
