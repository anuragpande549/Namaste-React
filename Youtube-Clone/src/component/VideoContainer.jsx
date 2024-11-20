import React from 'react'
import { useState,useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './videoCard'
import { useSelector } from 'react-redux'
// import Store from '../utils/Store'

function VideoContainer() {
const [cardData, setCardData] = useState([])
const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
// const isMenuOpen = useSelector(store => store.app.isMenuOpen);

const youTube =async () =>{
  let response = await fetch(YOUTUBE_API);
  let jsonData = await response.json()
  // console.log(jsonData);
  setCardData(jsonData.items)
}
console.log(isMenuOpen)
useEffect(()=>{
    youTube();
},[])

// console.log(cardData,"cardData");

  return (
    <div className={`flex flex-wrap gap-2 p-2 pr-4 justify-evenly  overflow-y-scroll w-[100%] h-[41rem]`} >
    {
      cardData.map((card)=><VideoCard key={card.id} details={card}/>)
    }
    
    </div>
  )
}

export default VideoContainer
