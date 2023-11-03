import React from "react";
import Image from "next/image";
import "./Contact.css";

const Contacts = () => {
  return (
    <>
      <div className="flex flex-col relative pb-40 con_con w-screen">
        <div className="relative">
          <Image
            className="w-screen"
            src="/contact.jpg"
            alt="cantact bg"
            width={1440}
            height={100}
          />{" "}
          <div className="absolute top-40 grid gap-4 vision-container right-16 rounded-xl border-2" >
            {" "}
            <span className="font-faktum text-2xl font-semibold text-white">
              {" "}
              Our Vision{" "}
            </span>{" "}
            <p className="font-Poppins text-sm vision-text text-white">
              At Banksathi, our mission revolves around enhancing awareness
              regarding financial products and simplifying the process of
              selecting and utilizing them.We provide a platform to our users to
              connect with financial institutions in order to access top - notch
              deals that facilitate the creation of wealth.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="relative text-black lower-section">
          <div className="flex flex-col items-center contact-info-container m-16">
            <div className="flex items-center px-3.5">
              <div>
                <span className="block font-Faktum font-semibold text-3xl mb-6">
                  {" "}
                  Contact Information: Reach Us Here{" "}
                </span>{" "}
                <p className="font-Poppins text-base text-neutral-500">
                  Feel free to contact us for inquiries, collaboration
                  opportunities, or any assistance you may need{" "}
                </p>{" "}
              </div>{" "}
              <Image
                // className="contact-info-upper-img"
                width={150}
                height={100}
                src="/man-with-phone.png"
                alt="man with phone"
              />
            </div>{" "}
            <div className="flex items-center w-full rounded-2xl font-semibold bg-white">
              <div className="flex flex-col w-2/4 py-9 pl-9 border-r border-solid border-zinc-300">
                <span> Official Mail </span>{" "}
                <span> partner@banksathi.com </span>{" "}
              </div>{" "}
              <div className="flex flex-col w-2/4 py-9 pl-9">
                <span> Phone Number </span> <span> +91 - 88582 89224 </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-2/4 p-10 rounded-2xl bg-white flex flex-col gap-10 absolute right-16 form-container">
            <div className="form-heading-section">
              <p className="text-xs font-Poppins text-zinc-400 form-heading-text">
                {" "}
                SEND A MESSAGE{" "}
              </p>{" "}
              <span className="text-2xl font-Faktum text-black font-semibold form-heading">
                {" "}
                Get in Touch with Us{" "}
              </span>{" "}
            </div>{" "}
            <div className="flex flex-col gap-7 form">
              <div className="flex gap-7 form-div-1">
                <input placeholder="Your name" />
                <input placeholder="Your Mobile No." />
              </div>{" "}
              <div>
                <input placeholder="Company Name" />
              </div>{" "}
              <div className="flex gap-7 form-div-1">
                <input placeholder="Designation" />
                <input placeholder="Official e-mail" />
              </div>{" "}
              <div>
                <textarea placeholder="Your message" />
              </div>{" "}
            </div>{" "}
            <button> Send Message </button>{" "}
          </div>{" "}
          <div className="w-96 flex flex-col gap-4 info-container m-16">
            <div className="flex items-center gap-5">
              <Image
                width={60}
                height={100}
                src="/hands-joined.png"
                alt="hands-joined"
              />
              <p className="text-black font-Poppins text-base font-semibold info-heading-text">
                <span className="percentage"> 98 % </span>{" "}
                <span> Partner Satisfaction </span>{" "}
              </p>{" "}
            </div>{" "}
            <span className="font-Faktum text-4xl font-semibold info-heading-heading">
              Check <span className="color-g"> what our </span>{" "}
              <span className="color-g"> Partners </span> has to say{" "}
            </span>{" "}
            <p className="text-black font-Poppins text-base info-text">
              These partnerships can take many forms, but they typically involve
              one partner providing the technology or expertise, while the other
              partner provides the customer base or distribution channels.{" "}
            </p>{" "}
          </div>{" "}
          <div className="w-2/4 absolute right-16 review-section-container">
            <div className="absolute top-0 comment-img-container">
              <Image
                className="comment-img"
                src="/comment.svg"
                alt="comment"
                width={150}
                height={140}
              />{" "}
            </div>{" "}
            <div className="absolute flex justify-center items-center bg-white rounded-full arrow-container">
              <Image
                src="/left-arrow.svg"
                width={7}
                height={13}
                alt="left-arrow"
              />
            </div>{" "}
            <div>
              <div className="flex flex-col items-center gap-8 bg-white rounded-2xl relative main-review">
                <div className="w-full upper-gradient" />
                <div className="flex flex-col items-center gap-5 mx-20">
                  <div className="rounded-xl border border-solid border-zinc-400 rating-box">
                    <Image
                      src="/stars.svg"
                      alt="stars"
                      width={125}
                      height={18}
                    />{" "}
                  </div>{" "}
                  <p className="text-neutral-600 font-Poppins text-lg text-center review-text">
                    My experience has been great with BankSathi.It&apos;s a great
                    organisation to collborate with.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="flex items-center gap-5">
                  <div className="profile-img-container">
                    <Image
                      src="/profile-img.png"
                      alt="profile img"
                      width={50}
                      height={50}
                    />{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-black font-Poppins font-semibold text-sm uppercase profile-name">
                      {" "}
                      Sanjeev D Kumar{" "}
                    </span>{" "}
                    <span className="font-Poppins font-semibold text-xs profile-name-text">
                      {" "}
                      AVP, Angel One{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-full p-5 review-bottom-section">
                  <Image
                    src="/angelone.png"
                    alt="angelone"
                    width={123}
                    height={24}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-review" />
              <div className="bg-review bg-2" />
            </div>{" "}
            <div className="absolute flex justify-center items-center bg-white rounded-full arrow-container right-arrow">
              <Image
                src="/right-arrow.svg"
                width={7}
                height={13}
                alt="left-arrow"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Contacts;
