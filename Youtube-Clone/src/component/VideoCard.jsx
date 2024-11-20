import React from 'react';
import { EyeIcon } from '@heroicons/react/outline'; // For views icon
import { Link } from 'react-router-dom';

function VideoCard({ details }) {
  console.log(details.id);
  const { snippet, statistics } = details;

  return (
   <Link to={"/watch?v="+details.id}> <div className="p-3 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 ease-in-out w-60 max-w-sm">
      {/* Thumbnail */}
      <img
        src={snippet?.thumbnails?.medium?.url}
        alt="Video Thumbnail"
        className="w-full h-36 object-cover rounded-t-lg"
      />

      {/* Content */}
      <div className="mt-2">
        {/* Title */}
        <h2 className="text-md font-semibold text-gray-900 line-clamp-2 leading-tight">
          {snippet?.localized?.title}
        </h2>

        {/* Channel Name */}
        <p className="text-sm text-gray-600 mt-1">{snippet?.channelTitle}</p>

        {/* Views */}
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <EyeIcon className="h-4 w-4 mr-1" />
          <span>{statistics?.viewCount / 1000}k views</span>
        </div>
      </div>
    </div>

    </Link>
  );
}

export default VideoCard;
