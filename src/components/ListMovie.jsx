import React from "react";
import Spiderman from "../assets/img/movie-spiderman.png";
import Lionking from "../assets/img/movie-lionking.png";
import Jhonwhick from "../assets/img/movie-jhonwhick.png";

function ListMovie() {
  return (
    <div className="w-auto bg-[#f5f6f8] h-[578px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[70px] mt-[66px] mx-[130px] mb-0] max-lg:m-[50px]  max-lg:gap-[45px] ">
          <div className="text-list-movie flex justify-between">
            <div
              className="
          font-bold 
          text-[24px]
          text-[#5F2EEA]
          relative 
          after:block 
          after:border 
          after:border-[#5F2EEA]
          after:scale-x-0 
          after:transition 
          after:duration-200 
          after:ease-linear 
          hover:after:scale-x-50
        "
            >
              Now Showing
            </div>
            <div
              className="
          font-bold 
          text-[16px]
          text-[#5F2EEA]
          relative 
          after:block 
          after:border 
          after:border-[#5F2EEA]
          after:scale-x-0 
          after:transition 
          after:duration-200 
          after:ease-linear 
          hover:after:scale-x-50
          flex items-center
        "
            >
              View all
            </div>
          </div>
          <div className="flex flex-row gap-[56px] overflow-x-scroll pb-[20px]">
            <div>
              <img
                src={Spiderman}
                alt=""
                className=" max-w-none w-[223px] border-2 border-[#ffffff] p-[20px] h-[308px] bg-[rgba(255,255,255,0.2)] rounded-[8px] overflow-hidden cursor-pointer"
              />
            </div>
            <div>
              <img
                src={Lionking}
                alt=""
                className=" max-w-none w-[223px] border-2 border-[#ffffff] p-[20px] h-[308px] bg-[rgba(255,255,255,0.2)] rounded-[8px] overflow-hidden cursor-pointer"
              />
            </div>
            <div>
              <img
                src={Jhonwhick}
                alt=""
                className=" max-w-none w-[223px] border-2 border-[#ffffff] p-[20px] h-[308px] bg-[rgba(255,255,255,0.2)] rounded-[8px] overflow-hidden cursor-pointer"
              />
            </div>
            <div>
              <img
                src={Spiderman}
                alt=""
                className=" max-w-none w-[223px] border-2 border-[#ffffff] p-[20px] h-[308px] bg-[rgba(255,255,255,0.2)] rounded-[8px] overflow-hidden cursor-pointer"
              />
            </div>
            <div>
              <img
                src={Lionking}
                alt=""
                className=" max-w-none w-[223px] border-2 border-[#ffffff] p-[20px] h-[308px] bg-[rgba(255,255,255,0.2)] rounded-[8px] overflow-hidden cursor-pointer"
              />
            </div>
            <div>
              <img
                src={Jhonwhick}
                alt=""
                className=" max-w-none w-[223px] border-2 border-[#ffffff] p-[20px] h-[308px] bg-[rgba(255,255,255,0.2)] rounded-[8px] overflow-hidden cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMovie;
