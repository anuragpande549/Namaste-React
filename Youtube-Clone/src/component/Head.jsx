import React from "react";
import menuIcone from "../assets/menu.png";
import searchIcon from "../assets/search.png";
import youtubeIcone from "../assets/youtube.png";
import cameraIcone from "../assets/camera.png";
import voiceIcone from "../assets/voice.png";
import accountIcone from "../assets/account.png";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/AppSlice";

const Head = () => {
  // Initialize useDispatch hook
  const dispatch = useDispatch();

  // Function to handle sidebar toggle
  const hideMenu = () => {
    dispatch(toggleSideBar());
  };

  return (
    <>
      <div
        id="header"
        className="w-full m-auto h-[8vh] flex items-center justify-between px-4 bg-slate-200"
      >
        <div id="logo" className="flex items-center gap-2">
          <div id="hambar">
            <img
              className="w-7 cursor-pointer"
              onClick={hideMenu} // Pass the function reference here
              src={menuIcone}
              alt="Menu Icon"
            />
          </div>
          <div id="logo" className="flex items-center">
            <img
              className="w-7 inline ml-2 mr-1"
              src={youtubeIcone}
              alt="YouTube Icon"
            />
            <span className="font-semibold text-xl ml-2 hidden sm:block">
              YouTube
            </span>
          </div>
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
            <img
              className="w-7 cursor-pointer"
              src={voiceIcone}
              alt="Voice Search Icon"
            />
          </div>
        </div>
        <div id="options" className="flex items-center gap-4">
          <div id="head-video">
            <img
              className="w-7 cursor-pointer"
              src={cameraIcone}
              alt="Create Video Icon"
            />
          </div>
          <div id="notifications">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </div>
          <div id="account">
            <img
              className="w-7 cursor-pointer rounded-full"
              src={accountIcone}
              alt="Account Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
