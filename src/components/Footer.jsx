import React from "react";
import LogoTickitz from "../assets/img/Tickitz.png";
import Sponsor1 from "../assets/img/sponsor1.png";
import Sponsor2 from "../assets/img/sponsor2.png";
import Sponsor3 from "../assets/img/sponsor3.png";
import Facebook from "../assets/img/logo-facebook.png";
import Instagram from "../assets/img/logo-instagram.png";
import Twitter from "../assets/img/logo-twitter.png";
import Youtube from "../assets/img/logo-youtube.png";

function Footer() {
  return (
    <div className="flex flex-col gap-[30px] my-[64px] mx-[130px] max-lg:m-0">
      <div className="flex flex-row justify-between items-start flex-wrap max-lg:p-[50px] max-lg:flex max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:gap-[30px] ">
        <div className="flex flex-col justify-center gap-[15px]">
          <div>
            <img src={LogoTickitz} alt="" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="text-[16px] font-semibold">
              Stop waiting in line. Buy tickets
            </div>
            <div className="text-[16px] font-semibold">
              conveniently, watch movies quietly.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[15px]">
          <div className="text-[16px] font-bold">Explore</div>
          <div className="flex flex-col gap-[15px]">
            <div className="text-[16px] font-semibold">Home</div>
            <div className="text-[16px] font-semibold">List Movie</div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[15px]">
          <div className="text-[16px] font-bold">Our Sponsor</div>
          <div className="flex flex-col gap-[25px]">
            <div>
              <img src={Sponsor1} alt="" />
            </div>
            <div>
              <img src={Sponsor2} alt="" />
            </div>
            <div>
              <img src={Sponsor3} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[15px]">
          <div className="text-[16px] font-bold">Follow Us</div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-row gap-[15px]">
              <div>
                <img src={Facebook} alt="" className="w-[24px]" />
              </div>
              <div className="text-[#6e7191]">Tickitz Cinema id</div>
            </div>
            <div className="flex flex-row gap-[15px]">
              <div>
                <img src={Instagram} alt="" className="w-[24px]" />
              </div>
              <div className="text-[#6e7191]">tickitz.id</div>
            </div>
            <div className="flex flex-row gap-[15px]">
              <div>
                <img src={Twitter} alt="" className="w-[24px]" />
              </div>
              <div className="text-[#6e7191]">tickitz.id</div>
            </div>
            <div className="flex flex-row gap-[15px]">
              <div>
                <img src={Youtube} alt="" className="w-[24px]" />
              </div>
              <div className="text-[#6e7191]">Tickitz Cinema id</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
