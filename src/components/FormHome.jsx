import React from "react";

function FormHome() {
  return (
    <div className="flex items-center justify-center h-[372px] my-[130px] m-[130px] shadow-[-4px_10px_10px_#bababa4d] max-lg:m-0">
      <div className="flex flex-col items-center justify-center gap-[20px] w-full">
        <div>
          <div className="text-[24px] text-[#4E4B66] font-semibold">
            Be the vanguard of the
          </div>
          <div className="text-[48px] text-[#5F2EEA] font-bold">Moviegoers</div>
        </div>
        <form
          action=""
          className="flex flex-row gap-[20px] w-full justify-center max-lg:flex  max-lg:flex-col  max-lg:items-center  max-lg:justify-center "
        >
          <input
            type="text"
            placeholder="Enter Your Email"
            className="border-2 border-[#dedede] w-[306px] h-[53px] rounded-[8px] pl-[24px] outline-none"
          />
          <button
            type="submit"
            className="w-[120px] h-[53px] bg-[#5f2eea] text-[#FFFFFF] transition-all duration-200 ease-linear hover:bg-[#FFFFFF] hover:border hover:border-[#5f2eea] hover:text-[#5f2eea]  rounded-[8px] cursor-pointer"
          >
            Join Now
          </button>
        </form>
        <div className="flex flex-col items-center gap-[8px] text-[14px] font-semibold text-[#4e4b66]">
          <div>By joining you as a Tickitz member,</div>
          <div>we will always send you the latest updates via email .</div>
        </div>
      </div>
    </div>
  );
}

export default FormHome;
