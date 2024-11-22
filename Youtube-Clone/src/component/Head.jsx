import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/AppSlice";
import { storeResult } from "../utils/SearchCase";
import menuIcone from "../assets/menu.png";
import searchIcon from "../assets/search.png";
import youtubeIcone from "../assets/youtube.png";
import cameraIcone from "../assets/camera.png";
import voiceIcone from "../assets/voice.png";
import accountIcone from "../assets/account.png";

const Head = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.search);

  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Debounced Search
  useEffect(() => {
    const timer = setTimeout(() => {

        if (storeData[searchValue]) {
          setSearchData(storeData[searchValue]);
        } else {
          searchAuto();
        }
      
    }, 300); // Adjust debounce delay as needed

    return () => clearTimeout(timer);
  }, [searchValue]); // Trigger effect only when `searchValue` changes

  // Fetch search suggestions from API
  const searchAuto = async () => {
    try {
      const response = await fetch(
        `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchValue}`
      );
      const resJson = await response.json();
      setSearchData(resJson[1] || []); // Safeguard against undefined response
      dispatch(storeResult({ [searchValue]: resJson[1] || [] }));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const hideMenu = () => {
    dispatch(toggleSideBar());
  };

  return (
    <>
      <header className="w-full h-16 flex sticky top-0 items-center justify-between px-4 bg-white shadow-md">
        {/* Left Section: Logo and Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={hideMenu}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            <img className="w-6" src={menuIcone} alt="Menu Icon" />
          </button>

          <div className="flex items-center">
            <img className="w-7" src={youtubeIcone} alt="YouTube Icon" />
            <span className="font-bold text-lg text-gray-800 hidden sm:block ml-2">
              YouTube
            </span>
          </div>
        </div>

        {/* Center Section: Search */}
        <div className="flex items-center flex-grow mx-4 max-w-lg">
          <div className="relative flex-grow">
            <input
              value={searchValue}
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search YouTube"
            />
            <button
              className="absolute top-0 right-0 h-full px-4 bg-gray-100 border-l border-gray-300 rounded-r-full hover:bg-gray-200"
              aria-label="Search Button"
            >
              <img className="w-5" src={searchIcon} alt="Search Icon" />
            </button>
          </div>
          <button
            className="ml-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            aria-label="Voice Search"
          >
            <img className="w-6" src={voiceIcone} alt="Voice Icon" />
          </button>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Create Video"
          >
            <img className="w-6" src={cameraIcone} alt="Create Video Icon" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Notifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Account"
          >
            <img className="w-8 h-8 rounded-full" src={accountIcone} alt="Account Icon" />
          </button>
        </div>
      </header>

      {/* Search Suggestions */}
      {searchData.length > 0 && (
        <div
          id="searchSuggestions"
          className="absolute z-10 m-auto w-full bg-white"
        >
          <ul className="max-w-lg capitalize m-auto pl-4">
            {searchData.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Head;
