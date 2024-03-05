import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'

const Heading = () => {
  return (
    <div>
    <div className='md:flex md:justify-between md:m-6'>
    <div>
    <p>Welcome back , GRT</p>
    <p>DashBoard /</p>
    </div>
    <div>
    <button className='px-4 py-2 text-white bg-[#75BDDD] w-54 rounded-md flex'>
      <FaRegCalendarAlt size={20} className='mr-2'/>
      <p>Jan 2024</p>
    </button>
    </div>
    </div>
    <div className='md:flex md:my-4 md:justify-around'>
      <div className='flex bg-gradient-to-r from-[#EEF9FA] to-white my-4 px-4 py-2 rounded-lg border-2 border-[#EEF9FA]'>
      <img 
      className='w-32'
      src='https://download.logo.wine/logo/TVS_Motor_Company/TVS_Motor_Company-Logo.wine.png' 
      alt='tvs_logo'/>
      <p className='md:mt-5'>TVS Brakes <br/><span className='text-[#3c7c98]'>TVS</span> </p>
      </div>
      <div className='md:px-4 md:py-2 rounded-lg text-white bg-[#006F9D] my-4 text-center '>
      <p className='text-[40px]'>12</p>
      <p className='text-sm'>Active services</p>
      </div>
      <div className='px-4 py-2 rounded-lg text-white bg-[#006F9D] my-4 text-center'>
      <p className='text-[40px]'>60</p>
      <p className='text-sm'>Total Threats detected</p>
      </div>
      <div className='px-4 py-2 rounded-lg text-white bg-[#006F9D] my-4 text-center'>
      <p className='text-[40px]'>45</p>
      <p className='text-sm'>Total Threats fixed</p>
      </div>
      <div className='px-4 py-2 rounded-lg border-2 border-[#EEF9FA]'>
        <div className='flex justify-between'>
        <p className='text-xl'>Security</p>
        <p className='text-green-400 border-2 border-green-400 rounded-full px-2 ml-24'>Secure</p>
        </div>
        <p className='text-xl text-[#327896]'>98%<span className='text-[#59c2ef] text-sm'> &nbsp;secure than before</span></p>
        <div class=" bg-gradient-to-r from-red-500 from-10% via-orange-400 via-70% to-emerald-300 to-90% rounded-lg">
        <button className=''></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Heading