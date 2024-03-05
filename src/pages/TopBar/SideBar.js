import React from 'react'
import LOGO from '../../assets/logo.png'
import { MdDashboard } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";

const SideBar = ({activeMenu,setActiveMenu,screenSize}) => {
  const handleCloseSideBar = () =>{
    if(activeMenu && screenSize <=900){
      setActiveMenu(false)
    }
  }
  
  return (
    <div>
      {
        activeMenu && (<>
      <div className="pb-10 shadow-lg bg-white">
      <div className='flex flex-col items-center'>
        <img 
      className='w-36 mt-4'
      src={LOGO} 
      alt='logo'
      onClick={handleCloseSideBar}/>
      <div className="flex mt-8">
       <MdDashboard size={25} className='mr-4'/>
        <p className='text-xl '>DashBoard</p>
      </div>
   
      </div>
      <div className='ml-3'>
      <h1 className='text-lg mt-4 font-bold'>Solutions</h1>
      <ul className='ml-3'>
        <li className='mb-2'>Network security</li>
        <li className='mb-2'>API security</li>
        <li className='mb-2'>Web security</li>
        <li className='mb-2'>Phishing and simulation</li>
        <li className='mb-2'>Dark wen</li>
        <li className='mb-2'>Server Hardening</li>
        <li className='mb-2'>SOC</li>
        <li className='mb-2'>External Attack<br/> Surface Monitoring</li>
        <li className='mb-2 text-gray-500'>Perimeter security<br/>review</li>
      </ul>
      </div>
      <div className='ml-3'>
      <h1 className='text-lg mt-4 font-bold'>Others</h1>
      <ul className='ml-3'>
        <li className='mb-2 flex'><IoIosAddCircleOutline size={20} className='mt-1'/>Calender</li>
        <li className='mb-2 flex'><IoIosAddCircleOutline size={20} className='mt-1'/>Escalation Matrix</li>
        <li className='mb-2 flex'><IoIosAddCircleOutline size={20} className='mt-1'/>Assessment management</li>
        <li className='mb-2 flex'><IoIosAddCircleOutline size={20} className='mt-1'/>Account settings</li>
        <li className='mb-2 flex'><IoIosAddCircleOutline size={20} className='mt-1'/>Feedbacks</li>
      </ul>
      </div>
      <div className='flex mt-4 ml-3 bg-white '><HiOutlineLogout size={25}/><p className='text-lg font-bold ml-4'>Logout</p></div>
      </div>
        </>)
      }
      
    </div>
  )
}

export default SideBar