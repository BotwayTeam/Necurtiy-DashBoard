import React from 'react';
import ReactECharts from 'echarts-for-react';
import { MdInfo } from 'react-icons/md';

const GaugeChart = ({title}) => {
  const mainChartOptions = {
    tooltip: {
      trigger: 'item'
    },
    avoidLabelOverlap: false,
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '80%'],
        center: ['60%', '70%'],
        startAngle: 180,
        endAngle: 360,
        label: {
          show: false,
          position: 'center'
        },
        data: [
          { value: 90, name: 'Search Engine',itemStyle:{color: 'rgb(243, 63, 67)'} },
          { value: 10, name: 'phishing',itemStyle:{color:'rgba(128, 128, 128, 0.1)'} },
        ]
      }]
  };

  const nestedChartOptions={
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['45%', '55%'],
        center: ['80%', '71%'],
        startAngle: 180,
        endAngle: 360,
        label: {
          show: false,
          position: 'center'
        },
        data: [
          { value: 20, name: 'Search Engine',itemStyle:{color:'rgb(243, 114, 43)'} },
          { value: 80, name: 'dummy',itemStyle:{color:'rgba(128, 128, 128, 0.1)'} }
        ]
      }]
  };
  return (
    <div className='border-2 border-gray-300 shadow-lg rounded-lg md:w-[20%] w-full h-80'>
    <div className='border-b-2 flex justify-between px-2'><p className='m-2 font-bold'>{title}</p><MdInfo size={25} className='text-gray-400 mt-2'/></div>
<div>
 <ReactECharts option={mainChartOptions} style={{ height: '200px', width: '200px' }} className='' />
</div>
<div>
 <ReactECharts option={nestedChartOptions} style={{ height: '200px', width: '151px' }} className='absolute md:top-[23.8em] top-[88em] ' />
</div>
</div>
  );
};

export default GaugeChart;
