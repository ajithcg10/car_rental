import Image from 'next/image'
import React from 'react'
import { footerLinks } from '@app/conacts'
import Link from 'next/link'

export default function Footer() {
  return (
   <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
     <div className='flex max-md:flex-col flex-wrap justify-between sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
            <Image src={"/logo.svg"} alt='Logo' width={118} height={18} />
            <p className='text-base text-gray-700'>car hub 2023<br/>All rights reserved &copy;</p>
        </div>
        <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
            {footerLinks.map((data)=>{
                return <div key={data.title} className='flex flex-col gap-6 text-base min-w-[170px]'>
                    <h3 className='font-bold'>{data.title}</h3>
                    {data.links.map((link)=>{
                        return <Link key={link.title} href={link.title} >{link.title}</Link>
                    })}

                </div>
            })}

        </div>
     </div>
     <div className='flex justify-between items-center flex-wrap mt-10 
      border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p className=''>@2023 carRental. All Right Reserved </p>
        <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
            <Link href={"/"} className='text-gray-500'>
                Privacy Policy
            </Link>
            <Link href={"/"} className='text-gray-500'>
                Terms of Use
            </Link>
        </div>

     </div>
   </footer>
  )
}
