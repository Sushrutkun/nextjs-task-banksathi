import React from "react";

const Statstics = () => {
  return (
    <div className=" justify-center flex flex-col items-center text-black">
      <div className=" justify-center font-Faktum font-semibold uppercase flex items-center text_stat text-[0.875rem] mt-[5rem] text-[#787878] ">
        <p> Seize the Opportunity: Unlock Growth </p>
      </div>
      <div style={{gridArea: "part"}} className=" flex justify-around flex-row items-center  w-[47rem] h-[6rem] mt-[3.5rem] mb-[5.5rem] col_stat mx-[1rem]">
        <div className=" justify-center flex flex-col items-center">
          <p className="text-[2.5rem] font-Faktum font-semibold text-[#8139EA] num_stat"> 100 + </p>
          <p className="text-[1.125rem] font-Poppins font-medium desc_stat"> Partners Onboarded </p>
        </div>
        <div class="h-[4.25rem]  bg-[#C9C9C9] w-[1px] vert_stat"></div>
        <div style={{gridArea: "pin"}} className=" justify-center flex flex-col items-center ">
          <p className="text-[2.5rem] font-Faktum font-semibold text-[#8139EA] num_stat"> 18 K + </p>
          <p className="text-[1.125rem] font-Poppins font-medium desc_stat"> PinCodes Covered </p>
        </div>
        <div class="h-[4.25rem]  bg-[#C9C9C9] w-[1px] vert_stat"></div>
        <div style={{gridArea: "adv"}} className=" justify-center flex flex-col items-center ">
          <p className="text-[2.5rem] font-Faktum font-semibold text-[#8139EA] num_stat">1.5 Mn +</p>
          <p className="text-[1.125rem] font-Poppins font-medium desc_stat">Advisor Community</p>
        </div>
      </div>
    </div>
  );
};

export default Statstics;
