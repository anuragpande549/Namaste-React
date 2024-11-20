import React from 'react';
import { HomeIcon, VideoCameraIcon, ClockIcon, ThumbUpIcon, CloudDownloadIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Sidebar() {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (isMenuOpen) ? (
    <div className='h-[92vh] sticky md:w-[10vw] text-slate-700 w-[5rem] bg-white'>
      <ul className='bg-white pl-4 flex flex-col gap-4 pr-4 pt-8 space-y-4'>
       <Link to={"/"}> <li className='flex items-center space-x-2'>
          <HomeIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>Home</span>
        </li></Link>
        <li className='flex items-center space-x-2'>
          <VideoCameraIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>Shorts</span>
        </li>
        <li className='flex items-center space-x-2'>
          <VideoCameraIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>Subscriptions</span>
        </li>
      </ul>
      <hr className='my-4 border-gray-300' />
      <ul className='bg-white flex flex-col gap-3 pt-9 pl-4 space-y-4'>
        <li className='flex items-center space-x-2'>
          <ClockIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>History</span>
        </li>
        <li className='flex items-center space-x-2'>
          <VideoCameraIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>Playlist</span>
        </li>
        <li className='flex items-center space-x-2'>
          <VideoCameraIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>Your Videos</span>
        </li>
        <li className='flex items-center space-x-2'>
          <ClockIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>Watch Later</span>
        </li>
        <li className='flex items-center space-x-2'>
          <ThumbUpIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>Liked Videos</span>
        </li>
        <li className='flex items-center space-x-2'>
          <CloudDownloadIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>Downloads</span>
        </li>
        <li className='flex items-center space-x-2'>
          <VideoCameraIcon className='w-6 h-6 text-slate-700' />
          <span className='md:block hidden'>Your Clips</span>
        </li>
      </ul>
    </div>
  ) : null;
}

export default Sidebar;
