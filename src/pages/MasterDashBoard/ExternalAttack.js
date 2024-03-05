import React from 'react'
import { MdInfo } from 'react-icons/md'

export const EmptyBox = ({text,title}) => {
  return (
    <div className='border-2 border-gray-300 shadow-lg rounded-lg md:w-[47%] w-full max-sm:h-72'>
    <div className='border-b-2 flex justify-between px-2'><p className='m-2 font-bold'>{title}</p><MdInfo size={25} className='text-gray-400 mt-2'/></div>
    <p className=' text-orange-500 text-2xl font-bold mt-24 text-center'>{text}</p>
</div>
  )
}