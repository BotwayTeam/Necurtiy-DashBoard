import React, { useEffect } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import { RiNotification2Line } from "react-icons/ri";
import { RiFullscreenLine } from "react-icons/ri";
import { VscColorMode } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";


const NavBar = ({activeMenu,setActiveMenu,screenSize,setScreenSize}) => {
    useEffect(()=>{
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize)
        handleResize()
        return window.removeEventListener('resize', handleResize)
          },[])
          
    useEffect(()=>{
            if(screenSize <= 900){
             setActiveMenu(false)
            }
            else{
              setActiveMenu(true)
            }
            console.log(screenSize);
          },[screenSize])
  return (
    <>
    <nav class="p-4 bg-white shadow-[-15px_0px_17px_7px_rgba(0,0,0,0.1)]">
    <div class="container mx-auto flex justify-between ">
    <div className='flex'>
    <button onClick={()=>setActiveMenu(!activeMenu)}>
     <BiMenuAltLeft 
     size={25}
     className='relative  mr-4'/>
    </button>
    <input 
    placeholder='search'
    className='border 1px border-blue-400 px-2 py-1 rounded-lg'/>
    </div>
        <div class=" hidden md:inline-flex space-x-6 ">
            <div className='border 1px border-blue-400 rounded-md p-2'>
            <RiNotification2Line 
            size={17}/>
            </div>
            <div className='border 1px border-blue-400 rounded-md p-2'>
            <RiFullscreenLine
            size={17}/>
            </div>
            <div className='border 1px border-blue-400 rounded-md p-2'>
            <VscColorMode
            size={17}/>
            </div>
            <div className='border 1px border-blue-400 rounded-md p-2'>
            <IoPersonOutline
            size={17}/>
            </div>
        </div>
    </div>
    </nav>
   
    </>
    )
}

export default NavBar