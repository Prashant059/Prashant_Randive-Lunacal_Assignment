import React, { useState } from "react";
import { BsGrid1X2Fill, BsQuestionCircle } from "react-icons/bs";

function Tabs() {
  const [sliderPosition, setSliderPosition] = useState(5);
  const handleMenuClick = (index) => {
    setSliderPosition(index * 135 + 2);
  };
  return (
    <div className="right-1 flex items-center flex-col ">
      <div
        style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)" }}
        className=" w-full bg-[#363C43] rounded-xl my-3 p-2 flex gap-2"
      >
        <div className="flex flex-col items-center space-y-20">
          <BsQuestionCircle className="text-[rgba(74,78,84,2)]" />
          <BsGrid1X2Fill className="text-[#4A4E54]" />
        </div>
        <div className="flex-1">
          <div className=" w-[95%] ">
            <nav
              style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
              }}
              className="flex bg-[#171717] p-3 rounded-xl text-white justify-around items-center relative text-sm"
            >
              <li
                className="py-1 px-4 list-none z-10 cursor-pointer"
                onClick={() => handleMenuClick(0)}
              >
                About Me
              </li>
              <li
                className="py-1 px-4 list-none z-10 cursor-pointer"
                onClick={() => handleMenuClick(1)}
              >
                Experience
              </li>
              <li
                className="py-1 px-4 list-none z-10 cursor-pointer"
                onClick={() => handleMenuClick(2)}
              >
                Recommended
              </li>

              <span
                style={{
                  left: `${sliderPosition}px`,
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                }}
                className="rounded-xl duration-500 bg-[#28292F] absolute h-10 w-[35%] shadow-2xl "
              ></span>
            </nav>

            <p className="text-[#969696] my-3">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
            <p className="text-[#969696]">
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(30,30,30,1) 14%, rgba(54,60,67,1) 76%)",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
        }}
        className="w-[90%] h-1 rounded-xl"
      ></div>
    </div>
  );
}

export default Tabs;