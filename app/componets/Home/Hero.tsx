"use client"
import React from 'react'
import CustomButton from '../inculeds/CustomButton'
import Image from 'next/image'


export default function Hero() {
    
  return (
    <div className='hero' >
        <div className='flex-1, pt-35,padding-x mt-10'>
            <h1 className='2xl:text-[72px] sm:text-[64px] text-[30px] font-extrabold'>
                Find ,book, or rent <br/>a car - quickly and easily
            </h1>
            <p className='text-[16px] text-black-100 mt-5 font-bold'>Streamline your car rental experience with  our effortless booking process</p>
            <CustomButton title="Exploer car" containerStyle='bg-primary-blue text-white rounded-full mt-10'  handleFuction={()=>{
                return alert("ajith")
            }}/>
        </div>
        <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
            <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
                <Image src={"/hero.png"} alt='hero' fill className='object-contain'/>
            </div>
            <div className='absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden' />
        </div>
    </div>
  )
}
