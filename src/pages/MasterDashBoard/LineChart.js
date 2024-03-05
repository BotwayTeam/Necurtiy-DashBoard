import React from 'react'
import ReactECharts from 'echarts-for-react';
import { MdInfo } from 'react-icons/md';

const LineChart = ({title}) => {
    const chartOptions = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Clicked Line', 'Opened Link', 'Email Sent'],
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Clicked Line',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Opened Link',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Email Sent',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
        ],
      };
  return (
    <div className='border-2 border-gray-300 shadow-lg rounded-lg md:w-8/12 w-full'>
        <div className='border-b-2 flex justify-between px-2'><p className='m-2 font-bold'>{title}</p><MdInfo size={25} className='text-gray-400 mt-2'/></div>
        <ReactECharts option={chartOptions}/>
        {/* <div><div className='w-4 bg-[#FF5733]'></div><p>Total Vulnerabilites</p></div>
        <div><div className='w-4 bg-[#C70039]'><p>Fixed</p></div></div> */}
    </div>
  )
}

export default LineChart