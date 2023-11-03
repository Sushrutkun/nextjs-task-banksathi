import React from "react";

const Collaboration = () => {
  return (
    <div className="collab-container justify-center flex flex-col items-center font-faktum text-black gap-16 mb-16 mt-[2rem]">
      <div className="collab-heading text-[2rem] font-semibold">
        <p> Open to collaboration ? </p>{" "}
      </div>{" "}
      <div className="collab-steps-container grid rounded-full p-5 gap-10 bg-white">
        <div className="flex items-center ">
          <div
            style={{ width: "50px", height: "50px" }}
            className="step-num justify-center flex items-center text-[2rem] bg-[#844FCF] rounded-full m-2 font-semibold text-white"
          >
            1{" "}
          </div>{" "}
          <p className="step-text font-semibold text-[1.625rem]">
            {" "}
            Get in Touch{" "}
          </p>{" "}
        </div>{" "}
        <hr className="bg-[#938E8E] border-dashed disp-web" />{" "}
        <div className="vertical-section">
          <div
            style={{ height: "40px" }}
            className="border-r border-dashed border-[#938E8E]"
          />
          <p className="font-Poppins text-black text-xs">
            Connect with Us Today : Let &apos;s start something great!{" "}
          </p>{" "}
        </div>{" "}
        <div className="flex items-center ">
          <div
            style={{ width: "50px", height: "50px" }}
            className="step-num justify-center flex items-center text-[2rem] bg-[#844FCF] rounded-full m-2 font-semibold text-white"
          >
            2{" "}
          </div>{" "}
          <p className="step-text font-semibold text-[1.625rem]"> Discuss </p>{" "}
        </div>{" "}
        <hr className="w-1/5 bg-[#938E8E] border-dashed disp-web" />{" "}
        <div className="vertical-section">
          <div
            style={{ height: "40px" }}
            className="border-r border-dashed border-[#938E8E]"
          />
          <p className="font-Poppins text-black text-xs">
            Engage in Dialogue: Ignite ideas and foster collaborative
            opportunities{" "}
          </p>{" "}
        </div>{" "}
        <div className="flex items-center ">
          <div
            style={{ width: "50px", height: "50px" }}
            className="step-num justify-center flex items-center text-[2rem] bg-[#844FCF] rounded-full m-2 font-semibold text-white"
          >
            3{" "}
          </div>{" "}
          <p className="step-text font-semibold text-[1.625rem]"> It &apos;s Live</p>{" "}
        </div>{" "}
        <div className="vertical-section">
          <div
            style={{ height: "40px", border: "unset" }}
            className="border-r border-dashed border-[#938E8E]"
          />
          <p className="font-Poppins text-black text-xs">
            Product Launched: Watch your revenue and profit grow{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Collaboration;
