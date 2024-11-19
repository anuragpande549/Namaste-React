import React from 'react';

function VideoCard({ details }) {

    const {snippet, statistics} = details
    console.log(snippet?.thumbnails?.title)
  return (
    <div className="p-2 bg-white rounded-lg shadow-xl overflow-hidden h-64 w-72  max-w-xs">
      <img src={snippet?.thumbnails?.high?.url} alt="Video Thumbnail" className="w-full  h-40 object-cover rounded-t-lg" />
      <div className="mt-1 border ">
        <h2 className="text-lg font-bold truncate">{snippet?.localized?.title}</h2>
        <p className=" ">{snippet?.channelTitle}</p>
        <p className=" ">{statistics.viewCount/1000+"k"}</p>
      </div>
    </div>
  );
}

export default VideoCard;
