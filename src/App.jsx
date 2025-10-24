import React from "react";
import Tabs from "./Components/Tabs";
import ImgSlider from "./Components/ImgSlider";

function App() {
  return (
    <div className="bg-primary h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-5 p-5">
      <div className="left w-[90%] md:w-[48%] h-[90%] bg-[#565758] rounded-xl text-white p-3 border-[0.3px] border-[#96BEE7]"></div>
      <div className="  w-[90%] md:w-[43%]  gap-4 p-2">
        <Tabs />
        <ImgSlider />
      </div>
    </div>
  );
}

export default App;