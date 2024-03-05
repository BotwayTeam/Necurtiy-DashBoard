import React from 'react'
import ReactECharts from 'echarts-for-react';
import { MdInfo } from 'react-icons/md';

const ApiChart = ({title}) => {
    const chartOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
            top: 20,
            bottom: 20,
            left: 10,
            right: 10,
            containLabel: true,
          },
        xAxis: {
          type: 'value',
          axisLine: {
            show: true,
          },
          axisTick: {
            show: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              opacity: 1,
            },
          },
        //   show: IoTrendingUpOutline,
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: true,
          },
          axisTick: {
            show: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              opacity: 1,
            },
          },
        },
        series: [
          {
            name: 'Not Fixed',
            type: 'bar',
            data: [65],
            barWidth: '20%', // Adjust the width of the bar
            itemStyle: {
              color: '#64C917',
              barBorderRadius: [0, 10, 10, 0],
            },
          },
          {
            name: 'Fixed',
            type: 'bar',
            data: [49],
            barWidth: '20%', // Adjust the width of the bar
            itemStyle: {
              color: '#F3DC00',
              barBorderRadius: [0, 10, 10, 0],
            },
          },
        ],
      };
    
  return (
    <div className='border-2 border-gray-300 shadow-lg rounded-lg md:w-5/12 w-full'>
        <div className='border-b-2 flex justify-between px-2'><p className='m-2 font-bold'>{title}</p><MdInfo size={25} className='text-gray-400 mt-2'/></div>
        <ReactECharts 
        option={chartOptions} 
        className="p-4"/>
        {/* <div><div className='w-4 bg-[#FF5733]'></div><p>Total Vulnerabilites</p></div>
        <div><div className='w-4 bg-[#C70039]'><p>Fixed</p></div></div> */}
    </div>
  )
}

export default ApiChart