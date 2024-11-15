import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function InputUser() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userName.length != 0 && password.length != 0){
      setUser({ userName, password });

    }
  };

  return (
    <div className='flex gap-3 flex-col border border-red-400 p-5 w-[70vw] mx-auto my-8 rounded-lg shadow-lg'>
      <input 
        type="text" 
        className='w-[20rem] border border-red-400 h-10 placeholder:text-center p-2 rounded-md focus:outline-none focus:border-blue-400' 
        placeholder='Username' 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} 
      />
      <input 
        type="password" 
        className='w-[20rem] border border-red-400 h-10 placeholder:text-center p-2 rounded-md focus:outline-none focus:border-blue-400' 
        placeholder='Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button 
        onClick={handleSubmit}
        className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200'>
        Submit
      </button>
    </div>
  );
}

export default InputUser;
