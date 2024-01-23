import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from '../inculeds/CustomButton'

export default function Header() {
  return (
    <header className='w-full  absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-10 py-4'>
            <Link href={"/"} className='flex justify-center items-center ' >
                <Image src={"/logo.svg"} width={118} height={18} alt='Logo' />
            </Link>
            <CustomButton title='Sigin' containerStyle='text-primary-black hover:text-blue-950'/>

        </nav>
    </header>
  )
}
