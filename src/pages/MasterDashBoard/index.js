import React from 'react'
import Heading from './Heading';
import NetworkChart from './NetworkChart';
import ApiChart from './ApiChart';
import GaugeChart from './GaugeChart';
import LineChart from './LineChart';
import DarkWebChart from './DarkWebChart';
import Dates from './Dates';
import SOCChart from './SOCChart';
import { EmptyBox } from './ExternalAttack';
import Reports from './Reports';
import SliderComponent from './SliderComponent';
import ServerHardening from './ServerHardening';
import NestedPieChart from './ServerHardening';
import OverallThread from './OverallThread';

const MasterDashBoard = () => {
  const slides = [
    'https://sm.mashable.com/mashable_in/seo/5/59461/59461_vr1e.jpg',
    'https://www.indiablooms.com/life_pic/2016/news-1471859267.jpg',
    'https://static.toiimg.com/thumb/msid-73504984,width-400,resizemode-4/73504984.jpg',
  ];
  return (
    <div className='md:m-8 my-8'>
   <Heading/>
   <div className='flex flex-col justify-center items-center md:flex-row md:justify-evenly md:my-8 md:h-80'>
   <NetworkChart title={"Network Security"}/>
   <ApiChart title={"API Security"}/>
   <GaugeChart title={"Network Security"}/>
   </div>
   <div className='flex flex-col md:flex-row md:justify-evenly md:my-8 md:h-80'>
   <LineChart title={"Phishing and simulation campain"}/>
   <DarkWebChart title={"Darkweb group Percentage"}/>
   </div>
   <div className='flex flex-col md:flex-row md:justify-evenly md:my-8 md:h-80'>
   <NestedPieChart title={"Server Hardening"}/>
   <EmptyBox 
   title={"Perimeter Security Review"}
   text = {"Graphical Representation"}/>
  <OverallThread title={"Overall thread percentage"}/>
   </div>
   <div  className='flex flex-col md:flex-row md:justify-evenly md:my-8 md:h-80'>
  <SOCChart/>
  <EmptyBox
  title={"External attack surface Monitoring"} 
  text = {"No Changes Detected !"}/>
  </div>
  <Reports/>
  <SliderComponent slides={slides}/>
  </div>
  )
}

export default MasterDashBoard