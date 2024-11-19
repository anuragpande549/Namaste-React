import React from 'react';
import { buttonList } from '../utils/constant';

function ButtonList() {
  return (
    <div className='w-[100vw] overflow-x-auto whitespace-nowrap bg-slate-200 pt-1 h-14 relative'>
      {buttonList.map((list, index) => (
        <h1 key={index} className='inline-block mr-3 ml-2 bg-slate-100 p-2 rounded-full'>
          {list}
        </h1>
      ))}
    </div>
  );
}

export default ButtonList;
