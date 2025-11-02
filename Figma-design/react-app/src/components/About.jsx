import React from "react";
import Main from "../assets/about-img/main.png";
import Engagements from "../assets/about-img/engagement.png";
import Communications from "../assets/about-img/communication.png";
import UnderLine from "../assets/about-img/underline.png";

export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        
       
        <div className="block md:hidden text-center mb-8">
          <h3 className="text-3xl font-bold">ABOUT US</h3>
          <img src={UnderLine} alt="underline" className="w-[35%] mx-auto mt-2" />
        </div>

        
        <img
          src={Main}
          alt="about"
          className="h-auto w-[90%] sm:w-[80%] md:h-[80%] mx-auto md:mx-0"
        />

       
        <div className="w-[90%] md:w-[80%] mx-auto md:mx-0 text-center md:text-left">
         
          <div className="hidden md:block">
            <h3 className="text-4xl font-bold">ABOUT US</h3>
            <img src={UnderLine} alt="underline" className="w-[30%]" />
          </div>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            We love what we do and are driven by achieving great results for our
            clients. Our awards and impressive client list are testament to our
            high quality approach. We deliver value, creativity, results and
            exceptional levels of customer service and professionalism. We
            specialise in infrastructure development, energy and natural
            resources.
          </p>

          {/* Engagement and Communications */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
           
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Engagements} alt="engagement" />
              </div>
              <div className="w-[90%] sm:w-[85%]">
                <h4 className="font-semibold">ENGAGEMENT</h4>
                <p className="text-sm text-gray-500 py-2">
                  We are engagement specialists, who have led projects at all
                  levels of the IAP2 spectrum.
                  <br />
                  <span className="font-semibold text-gray-600">READ MORE</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Communications} alt="communication" />
              </div>
              <div className="w-[90%] sm:w-[85%]">
                <h4 className="font-semibold">COMMUNICATIONS</h4>
                <p className="text-sm text-gray-500 py-2">
                  We are award-winning leaders in communications and campaign
                  management.
                  <br />
                  <span className="font-semibold text-gray-600">READ MORE</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
