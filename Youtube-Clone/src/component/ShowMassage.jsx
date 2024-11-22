import React from 'react'
import accountIcone from "../assets/account.png"

function ShowMassage({name,massage}) {
  return (<>
    <div className=' border border-slate-800 max-w-[full] mb-2 bg-white rounded-xl p-1 flex  items-center gap-3'>
      <img src={accountIcone} alt="Account Icone" className='w-4 h-4'/>
      <span className='font-bold'>{name+" :"} </span>
      <span>{massage}</span>
    </div>
   
  </>
  )
}

export default ShowMassage
