import React from 'react';
import { buttonList } from '../utils/constant';

function ButtonList() {
  return (
    <div className='w-[95vw] overflow-x-auto overflow-y-hidden whitespace-nowrap bg-gray-100 py-3 px-4 shadow-sm" h-14 relative'>
      {buttonList.map((list, index) => (
        <h1 key={index} className='inline-block mr-3 ml-2 bg-slate-100 p-2 rounded-full'>
          {list}
        </h1>
      ))}
    </div>
  );
}

export default ButtonList;


{/* <div className="w-[100%] overflow-x-scroll  whitespace-nowrap> */}
