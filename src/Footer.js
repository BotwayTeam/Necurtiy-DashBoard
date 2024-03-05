import React from 'react'
import LOGO from './assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-gray-300 p-6'>
      <img 
      className='w-48'
      src={LOGO} 
      alt='logo'/>
      <div className='flex justify-between'>
      <p className='w-96 py-4 text-sm'>Necurity Solutions is a holistic information technology security solution provider. We focus on providing innovative security solutions, to ensure the value of your digital assets.</p>
      <p className='w-96 px-24 py-4 text-sm '>Terms and conditions <br/> Privacy Policy </p>
      </div>
    </div>
  )
}

export default Footer