"use client"
import React,{useState} from 'react'
import SerachMenuFature from './SerachMenuFature'

export default function SerachFilter() {
     const [menufature,setMenufature] = useState("")
    const handleSubmit =  ()=>{}
  return (
   <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
            <SerachMenuFature menufature={menufature} setManufature={setMenufature}/>
        </div>
   </form>
  )
}
