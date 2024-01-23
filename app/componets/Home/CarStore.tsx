"use client"
import React, { useEffect } from 'react'
import SerachFilter from '../inculeds/SerachFilter'
import CustomFilter from '../inculeds/CustomFilter'
import { fetchData } from '../until'
import {carData} from "../redux/carSlice/carSlice"
import { AppDispatch, UseAppSelector } from '../redux/store'
import { useDispatch } from 'react-redux'


export default function CarStore() {
 const data :any [] = UseAppSelector((state)=>state.carReducer.carDetails)
  const dispatch =useDispatch<AppDispatch>()
  console.log(data);
  const val = [1,3,2,42,4,23,2]
useEffect(() => {
  const fetchDataAndDispatch = async () => {
    try {
      const data_list = await fetchData();
      dispatch(carData(data_list));
    } catch (error:any) {
      console.error(error.message);
    }
  };
  fetchDataAndDispatch();
}, [dispatch])

const isEmpty = !Array.isArray(data) ||data.length === 0 || !data





  return (
    <main>
       <div className='mt-12 padding-x padding-y max-width' id='discover'>
          <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
              <h1 className='text-4xl font-extrabold'> Car Catalogue</h1>
              <p>Explore the cars you might like</p>
          </div>
          <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
            <SerachFilter/>
          </div>
          <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter/>
            <CustomFilter/>
          </div>
        </div>
        {!isEmpty ? 
        <section>
          we have cars
          
        </section>
        :
        <div>
          <h2>oops,no result</h2>
          {data}
        </div>
          }
    </main>
   
    
   
  )
}
