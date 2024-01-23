
import React,{useState,Fragment} from 'react'
import {Combobox,Transition  } from "@headlessui/react";
import Image from 'next/image';
import { manufacturers } from '@app/conacts';


type SerachMenu ={
    menufature: string,
    setManufature: (menufature:string) => void
}

export default function SerachMenuFature({menufature,setManufature}:SerachMenu) {
    const [query,setQuery]=useState('')
    const filteredMenufature =  query === "" ? manufacturers
    : manufacturers.filter((item)=>(item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))))
    
  return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center'>
        <Combobox value={menufature} onChange={setManufature}>
            <div className='relative w-full'>
                <Combobox.Button className={"absolute top-[14px]"}>
                    <Image src={"/car-logo.svg"} width={20} height={20} alt='car-logo'  className='ml-4'/>
                </Combobox.Button>
                <Combobox.Input  className={"w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"}
                 placeholder='volkswagen' 
                 displayValue={(menufature:string)=>menufature} 
                 onChange={(e)=>setQuery(e.target.value)}  />
                 <Transition 
                 as={Fragment}
                 leave='transition ease-in duration-100'
                 leaveFrom="opacity-100"
                 leaveTo="opacity-0" 
                 afterLeave={() => setQuery('')}
                 >
                    <Combobox.Options>
                        {filteredMenufature.map((item)=>{
                            return <Combobox.Option key={item} className={({active})=>`relative absolute mt-1 max-h-60 w-full overflow-auto rounded-md
                             bg-white py-1 text-base shadow-lg ring-1
                              ring-black ring-opacity-5
                               focus:outline-none sm:text-sm ${active}? bg-primary-blue text-black : text-gray-100;
                            `} value={item}>
                                {item}

                            </Combobox.Option>
                        })}

                    </Combobox.Options>

                 </Transition>

            </div>
        </Combobox>
    </div>
  )
}

