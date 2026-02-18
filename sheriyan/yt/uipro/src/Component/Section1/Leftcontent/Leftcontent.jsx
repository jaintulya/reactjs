import React from "react";
import Herotext from "./Herotext";
import Arrow from "./arrow";

const Leftcontent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3  ">
     <Herotext />
    <Arrow />
    </div>
  );
};

export default Leftcontent;
