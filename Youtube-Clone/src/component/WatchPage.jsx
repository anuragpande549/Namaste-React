import React from 'react';
import { useSearchParams } from 'react-router-dom';

function WatchPage() {
  const [params] = useSearchParams();
  console.log(params.get('v')); // Assuming 'v' is the parameter for the video ID

  return (
    <div>
      <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${params.get('v')}?si=w14iSZndC3FWdntT`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
