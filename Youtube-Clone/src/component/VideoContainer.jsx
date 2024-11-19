import React from 'react'
import { useState,useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './videoCard'

function VideoContainer() {
const [cardData, setCardData] = useState([])

const youTube =async () =>{
  let response = await fetch(YOUTUBE_API);
  let jsonData = await response.json()
  // console.log(jsonData);
  setCardData(jsonData.items)
}

useEffect(()=>{
    youTube();
},[])

// console.log(cardData,"cardData");

  return (
    <div className='flex flex-wrap gap-2 p-2 overflow-y-scroll w-full  border border-red-400  h-[41rem]' >
    {
      cardData.map((card)=><VideoCard key={card.id} details={card}/>)
    }
    
    </div>
  )
}

export default VideoContainer
