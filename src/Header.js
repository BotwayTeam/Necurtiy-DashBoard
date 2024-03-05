import React, { useState } from 'react'
import NavBar from './pages/TopBar/NavBar'
import SideBar from './pages/TopBar/SideBar'
import DashBoard from './pages/DashBoard'

const Header = ({activeMenu,setActiveMenu,screenSize,setScreenSize}) => {

  return (
    <div>
          {activeMenu ? (
            <div className='bg-white absolute h-screen w-60 sidebar dark:bg-secondary-dark-bg '>
              <SideBar 
               activeMenu={activeMenu}
               setActiveMenu={setActiveMenu}
              screenSize={screenSize}/>
            </div>
           ) : (
            <> </>
           )}
        
        <div className={
            `${activeMenu 
              ? `md:ml-64`:`flex-2`}`
           }>
            <div className='fixed md:static '>
              <NavBar
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              screenSize={screenSize}
              setScreenSize={setScreenSize}/>
            </div>
           </div>
       
    </div>
  )
}

export default Header