import React from "react";
import Spiderman from "../assets/img/spiderman.png";
import Lion from "../assets/img/lion.png";
import Witches from "../assets/img/witches.png";

function LayerMovie() {
  return (
    <div className="flex justify-between flex-row my-[48px] mx-[200px] max-lg:flex max-lg:flex-col max-lg:m-0 max-lg:mt-[50px]">
      <div className="flex items-center flex-col justify-center">
        <div className="text-[20px] text-[#4e4b66] max-sm:text-[15px]">
          Nearest Cinema, newest movie,
        </div>
        <div className="text-[56px] text-[#5f2eea] font-bold max-sm:text-[30px]">
          Find out now!
        </div>
      </div>
      <div className="flex flex-row max-w-[420px] w-full max-lg:flex max-lg:items-center max-lg:justify-center max-lg:max-w-none ">
        <div>
          <img
            src={Spiderman}
            alt="Gambar Spiderman"
            className="mt-[50px] max-sm:max-w-[110px]"
          />
        </div>
        <div>
          <img
            src={Lion}
            alt="Gambar Lion"
            className="mt-[25px] max-sm:max-w-[110px]"
          />
        </div>
        <div>
          <img
            src={Witches}
            alt="Gambar Witches"
            className=" max-sm:max-w-[110px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LayerMovie;
