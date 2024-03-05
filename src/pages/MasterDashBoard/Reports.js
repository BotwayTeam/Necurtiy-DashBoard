import React from 'react'
import { FaFilter } from "react-icons/fa6";

const Reports = () => {
  return (
    <div className='max-sm:hidden'>
     <div class="my-16 m-6">  
     <h1 class="font-bold text-xl text-sky-600 mb-4 ">Report</h1>
     <p class="mb-4">Manage your report details</p>
     <div className='flex md:flex-row flex-col'>
     <input type="text" placeholder="Search by lorem epsiom" class="p-2.5 pr-52 border border-zinc-200 rounded mr-4 text-gray-500"/>
     <button class="p-2.5 max-sm:w-40 border border-zinc-200 rounded text-zinc-400 flex"><FaFilter className='m-1'/><p>Filter</p></button>
     </div>
  </div>

  <div class="flex flex-col md:flex-row justify-around  my-8">
     <div class="border px-8 py-2 rounded-md bg-gradient-to-r from-[#EEF9FA] to-white border-[#EEF9FA] shadow-lg">
      <h1 class="font-medium text-black ">Red teaming assessment</h1>
      <p class="mb-4 text-zinc-400">27/02/24</p>
      <button class="py-2 px-4 border border-slate-600 rounded-full bg-sky-600 text-white font-medium ">Download</button>
     </div>

     <div class="border px-8 py-2 justify-center rounded-md bg-gradient-to-r from-[#EEF9FA] to-white border-[#EEF9FA] shadow-lg">
      <h1 class="font-medium text-black">Phishing and Simulation attacks</h1>
      <p class="mb-4 text-zinc-400">02/05/24</p>
      <button class="py-2 px-4 border border-slate-600 rounded-full bg-sky-600 text-white font-medium ">Download</button>
     </div>

     <div class="border px-8 py-2 justify-center rounded-md bg-gradient-to-r from-[#EEF9FA] to-white border-[#EEF9FA] shadow-lg">
      <h1 class="font-medium text-black ">Darkweb monitoring</h1>
      <p class="mb-4 text-zinc-400">07/05/24</p>
      <button class="py-2 px-4 border border-slate-600 rounded-full bg-sky-600 text-white font-medium">Download</button>
     </div>

     <div class="border px-8 py-2 justify-center rounded-md bg-gradient-to-r from-[#EEF9FA] to-white border-[#EEF9FA] shadow-lg">
      <h1 class="font-medium text-black ">Server Hardening</h1>
      <p class="mb-4 text-zinc-400	">09/05/24</p>
      <button class="py-2 px-4 border border-slate-600 rounded-full bg-sky-600 text-white font-medium">Download</button>
     </div>
  </div>

  <div className='max-sm:hidden'>
    <h1 class="font-bold text-xl text-sky-500  mx-5">Contract Dues</h1>
    <div className='flex flex-col md:flex-row'>
    <div class="container border p-8 mx-5 justify-center my-8 w-4/12 rounded-md shadow-lg bg-gradient-to-r from-[#EEF9FA] to-white border-[#EEF9FA]">
      <div class="flex justify-between">
        <h2 class="font-bold">VAPT</h2>
        <h3 className='text-sm'>&#128546;18 days left</h3>
      </div>
      
      <p class="mt-8">Expires on 10/02/24</p>
    </div>
    <div class="container border p-8 mx-5 justify-center my-8 w-4/12 rounded-md shadow-lg bg-gradient-to-r from-[#EEF9FA] to-white border-[#EEF9FA]">
      <div class="flex justify-between">
        <h2 class="font-bold">Phishing and Simulation attacks</h2>
        <h3 className='text-sm'>&#128546;18 days left</h3>
      </div>
      
      <p class="mt-8 text-sm">Expires on 30/02/24</p>
    </div>
    <div class="container border p-8 mx-5 justify-center my-8 w-4/12 rounded-md shadow-lg bg-gradient-to-r from-[#EEF9FA] to-white border-[#EEF9FA]">
      <div class="flex justify-between">
        <h2 class="font-bold">Darkweb</h2>
        <h3 >&#128546;18 days left</h3>
      </div>
      
      <p class="mt-8">Expires on 30/02/24</p>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Reports