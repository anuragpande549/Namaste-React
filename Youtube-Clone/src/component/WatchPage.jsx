import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../utils/AppSlice";
import Comment from "./Comment";
import LiveMassage from "./LiveMassage";

function WatchPage() {
  const [params] = useSearchParams();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const dispatch = useDispatch();

  const closeBar = () => {
    dispatch(closeSideBar());
  };

  useEffect(() => {
    closeBar();
  }, []);

  return (
    <div className="w-full mt-2 overflow-hidden bg-gray-100">
      {/* Video and Live Chat Container */}
      <div
        id="video-container"
        className="flex flex-col lg:flex-row items-center justify-center gap-4 p-4"
      >
        {/* Video Player */}
        <div className="w-full md:w-2/3 lg:w-3/4 aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${params.get(
              "v"
            )}?si=w14iSZndC3FWdntT`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Chat */}
        <div
          id="live-massage"
          className="w-full lg:w-1/3 lg:w-1/4 lg:h-[full] max-h-[35rem] drop-shadow-2xl bg-white border rounded-lg shadow-md overflow-y-scroll"
        >
          <LiveMassage />
          
        </div>
        
      </div>

      {/* Comments Section */}
      <div className="w-full p-4">
        <Comment />
      </div>
    </div>
  );
}

export default WatchPage;
