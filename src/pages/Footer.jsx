'use client'
import React from "react";
import Sponsors from "./Sponsors";
import Image from "next/image";
import { alfa, albert } from "@/app/layout";

const Footer = () => {
  return (
    <div className="flex flex-col overflow-x-hidden relative z-[101]">

      <Sponsors />

      <div id="contact" className="Footer relative flex flex-col w-full min-h-[500px] px-6 sm:px-10 md:px-16 lg:px-20 pt-10 md:pt-14 pb-6 md:pb-8 -translate-y-[4px] -mb-[4px]">

        {/* Contact Us Title */}
        <p
          className={`${alfa.className} 
          text-center
          text-[36px] sm:text-[48px] md:text-[60px] lg:text-[78px] leading-none
          mb-8 md:mb-12 static-gold`}
        >
          Contact us
        </p>

        {/* Content Row - stacks on mobile and tablet */}
        <div className="flex flex-col justify-between items-center gap-10 md:gap-14">

          {/* Core Committee */}
          <div className="w-full flex flex-col items-center">
            <p
              className={`${albert.className} text-[24px] sm:text-[28px] md:text-[32px] 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]
              text-center`}
            >
              Core Committee
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-8 mt-4 text-white text-[16px] sm:text-[18px] md:text-[20px] justify-items-center text-center">

              <div className="committee-item">
                <p className={`${albert.className} text-[20px] sm:text-[20px] md:text-[25px] 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]
              text-center`}> Marketing and Cultural Coordinator</p>
                <p>Amirthavarshini R</p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] opacity-90">+91 99529 64049</p>
              </div>

              <div className="committee-item">
                <p className={`${albert.className} text-[20px] sm:text-[20px] md:text-[25px] 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]
              text-center`}>Infra and Finance Coordinator</p>
                <p>Mukilan V M</p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] opacity-90">+91 93844 37698</p>
              </div>

              <div className="committee-item">
                <p className={`${albert.className} text-[20px] sm:text-[20px] md:text-[25px] 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]
              text-center`}>Planning and Internal Relations Coordinator</p>
                <p>Shanjay S</p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] opacity-90">+91 96009 23014</p>
              </div>

              <div className="committee-item">
                <p className={`${albert.className} text-[20px] sm:text-[20px] md:text-[25px] 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]
              text-center`}>Promotions and External Relations Coordinator</p>
                <p>Amrutha K R</p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] opacity-90">+91 93619 71610</p>
              </div>

              <div className="committee-item">
                <p className={`${albert.className} text-[20px] sm:text-[20px] md:text-[25px] 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]
              text-center`}>Creative and Development Coordinator</p>
                <p>Rajeshwar P</p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] opacity-90">+91 80724 37287</p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className={`${albert.className} w-full flex flex-col items-center`}>
            <p
              className="text-[22px] sm:text-[26px] md:text-[28px] 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-[#B3902C] via-[#F8F08B] to-[#D7B44E]
              text-center"
            >
              Follow us
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
              <a href="https://www.instagram.com/kuruksastra?igsh=c3VrYWEwdXgydTNj" target="_blank" className="social-link transition-transform duration-200 hover:scale-115">
                <Image src="/foo/insta.png" alt="Instagram" width={40} height={40} className="sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] rounded-lg" />
              </a>

              <a href="https://www.facebook.com/kssastra/" target="_blank" className="social-link transition-transform duration-200 hover:scale-115">
                <Image src="/foo/fb.png" alt="Facebook" width={40} height={40} className="sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] rounded-lg" />
              </a>

              <a href="https://youtube.com/@sastrafotohub?si=MIuC5i2-YCzNgqCC" target="_blank" className="social-link transition-transform duration-200 hover:scale-115">
                <Image src="/foo/youtube.png" alt="YouTube" width={40} height={40} className="sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] rounded-lg" />
              </a>

              <a href="https://www.linkedin.com/company/kuruksastra/" target="_blank" className="social-link transition-transform duration-200 hover:scale-115">
                <Image src="/foo/linkedin.png" alt="LinkedIn" width={40} height={40} className="sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] rounded-lg" />
              </a>

              <a href="https://x.com/kssastra?t=m_rRvKLpVIyeU_rN9FSBiA&s=09" target="_blank" className="social-link transition-transform duration-200 hover:scale-115">
                <Image src="/foo/x_logo.png" alt="X" width={40} height={40} className="sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] rounded-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Image
          src="/foo/Vector 2.png"
          alt="divider"
          width={1500}
          height={10}
          className="object-contain w-full mt-6 md:mt-8"
        />

        {/* Credits */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 px-0 sm:px-4 mt-2 text-white text-[12px] sm:text-[14px] font-['Poppins']">
          <p>@2026 kuruksastra</p>
          <p>Made with 🤍 by 300DPI & ACE</p>
        </div>

      </div>

    </div>
  );
};

export default Footer;
