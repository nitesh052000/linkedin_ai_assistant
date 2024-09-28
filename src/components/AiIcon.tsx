import React from "react";

interface AiIconProps{
    onClick: ()=>void;
}

const AiIcon:React.FC<AiIconProps>=({onClick})=>{
      return (
      <button className=" h-8 w-8 fixed rounded-full shadow-lg bg-white" 
      onClick={onClick} 
      >
        <img src="/icon/magic_wand_icon.png" alt="AI icon" className="w-6 h-6"/>
      </button>
      );
};

export default AiIcon;