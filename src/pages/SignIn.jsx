import React from "react";
import LogoWeb from "../assets/img/logo-web.png";
import { FaEye } from "react-icons/fa";
import Poster from "../assets/img/poster-auth.png";

function SignIn() {
  return (
    <div className="flex h-screen">
      <div
        className="relative w-[60%] h-screen bg-cover bg-center bg-no-repeat max-lg:hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(43,21,107,0.8), rgba(43,21,107,0.8)), url(${Poster})`,
        }}
      >
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white text-center">
          <div>
            <img src={LogoWeb} alt="Logo Web" />
          </div>
          <div className="mt-[20px] text-[1.5rem]">wait, watch, wow!</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[20px] flex-col w-[40%] text-[#121212] max-lg:items-center max-lg:justify-center max-lg:w-full ">
        <form
          action=""
          className="flex flex-col gap-[20px]  max-sm:w-items-center "
        >
          <div className="flex flex-col gap-[20px] max-w-[310px]">
            <div className="text-[#121212] text-[48px] font-semibold">
              Sign In
            </div>
            <div className="text-[#aaaaaa] text-[18px] font-normal">
              Sign in with your data that you entered during your registration
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Write your Email"
              name="email"
              className="flex flex-col border w-[400px] h-[50px] rounded-[15px] border-[#121212] pl-[24px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="password">Password</label>
            <div className="flex h-[55px] rounded-[15px] overflow-hidden border border-[#121212] w-[400px]">
              <input
                type="password"
                id="password"
                placeholder="Write your password"
                className="w-full h-[50px] rounded-[15px] pl-[24px] outline-none"
              />
              <button
                type="button"
                className="flex items-center justify-center w-[50px] h-full cursor-pointer"
              >
                <FaEye />
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-[400px] h-[64px] bg-[#5f2eea] rounded-[15px] text-[#f7f7fc] text-[16px]"
          >
            Sign In
          </button>
          <div className="flex flex-col gap[-15px] text-[#4e4b66] max-lg:items-center">
            <div>
              Forgot your password?
              <a href="#" className="text-[#5f2eea]">
                Reset now
              </a>
            </div>
            <div>
              Don't have an account?
              <a href="/Sign-up.html" className="text-[#5f2eea]">
                {" "}
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
