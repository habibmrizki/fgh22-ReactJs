import React from "react";
import LogoTickitz from "../assets/img/Tickitz.png";
import { GiHamburgerMenu } from "react-icons/gi";

function navbar() {
  return (
    <nav className="flex items-center justify-between text-[60px] top-0 right-0 left-0 py-[1.4rem] px-[5%]">
      <div className="flex flex-row items-center justify-center gap-[65px]">
        <div>
          <button type="button">
            <img
              src={LogoTickitz}
              alt="Logo Ticketz"
              className="flex items-center"
            />
          </button>
        </div>
        <div className="flex flex-row gap-[65px] max-lg:hidden">
          <div>
            <a
              href="#"
              className="flex text-[16px] items-center text-[#4e4b66]"
            >
              Home
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex text-[16px] items-center text-[#4e4b66]"
            >
              List Menu
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-center max-lg:hidden">
        <a href="/Sign-up.html">
          <button
            type="button"
            class="flex items-center justify-center w-[140px] h-10 rounded-xl font-semibold bg-[#5f2eea]  text-white  text-[14px] transition-all duration-200 ease-linear hover:bg-[#FFFFFF] hover:border hover:border-[#5f2eea] hover:text-[#5f2eea] cursor-pointer"
          >
            Sign up
          </button>
        </a>
      </div>
      <button type="button" className="hidden max-lg:flex">
        <GiHamburgerMenu className="w-6 h-6" />
      </button>
    </nav>
  );
}

export default navbar;
