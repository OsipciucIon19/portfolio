import React from 'react';
import bg1 from "../../assets/images/bg-1.svg";
import bg3 from "../../assets/images/bg-3.svg";

const Background = () => {
  return (
    <div className="image-wrapper-bg">
      <img className="bg-1" width="400" src={bg1} alt="background1"/>
      <img className="bg-2" width="700" src={bg3} alt="background3"/>
    </div>
  );
}

export default Background;