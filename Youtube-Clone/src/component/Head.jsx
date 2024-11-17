import React from "react";
import menuIcone from "../assets/menu.png";
import searchIcon from "../assets/search.png";
import youtubeIcone from "../assets/youtube.png";
import cameraIcone from "../assets/camera.png";
import voiceIcone from "../assets/voice.png";
import accountIcone from "../assets/account.png";

const Head = () => {
  return (
    <>
      <div id="header" className="w-full m-auto h-[8vh] flex items-center justify-between px-4 bg-slate-100">
        <div id="logo" className="flex items-center gap-2">
          <div id="hambar">
            <img className="w-7 cursor-pointer" src={menuIcone} alt="Menu Icon" />
          </div>
          <div id="logo" className="flex items-center">
            <img className="w-7 inline ml-2 mr-1  " src={youtubeIcone} alt="YouTube Icon" />
            <span className="font-semibold text-xl ml-2 hidden sm:block">YouTube</span>          </div>
        </div>
        <div id="search" className="flex items-center w-1/2 md:w-1/3 lg:w-1/2">
          <div id="input" className="flex-grow relative">
            <input
              type="text"
              className="w-full p-2 border border-gray-300  rounded-full focus:outline-none"
              placeholder="Search"
            />
            <div id="input-search" className="absolute top-0 right-0 h-full">
              <button className="p-2 bg-gray-200 border border-gray-300  rounded-r-full hover:bg-gray-300">
                <img className="w-6" src={searchIcon} alt="Search Icon" />
              </button>
            </div>
          </div>
          <div id="search-voice" className="ml-2 p-2 bg-white rounded-full">
            <img className="w-7 cursor-pointer" src={voiceIcone} alt="Voice Search Icon" />
          </div>
        </div>
        <div id="options" className="flex items-center gap-4">
          <div id="head-video">
            <img className="w-7 cursor-pointer " src={cameraIcone} alt="Create Video Icon" />
          </div>
          <div id="notifications">
            <img className="w-7 cursor-pointer" src={voiceIcone} alt="Notifications Icon" />
          </div>
          <div id="account">
            <img className="w-7 cursor-pointer rounded-full" src={accountIcone} alt="Account Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
