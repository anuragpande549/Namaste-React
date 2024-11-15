import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Display() {
  const { user } = useContext(UserContext);

  if (!user) return <div className='text-red-500 w-[50vw] m-auto  font-bold'>User: Not Found</div>;

  return (
    <div className='flex flex-col w-[50vw] m-auto items-center gap-3 mt-8'>
      <h1 className='text-xl font-bold text-gray-700'>First Name: {user.userName}</h1>
      <h1 className='text-xl font-bold text-gray-700'>Last Name: {user.password}</h1>
    </div>
  );
}

export default Display;
