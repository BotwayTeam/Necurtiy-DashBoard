import React from 'react';
import ReactECharts from 'echarts-for-react';
import { MdInfo } from 'react-icons/md';

const SOCChart = ({title}) => {
  const chartOptions = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Alerts', 'Resolved'],
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          opacity: 0.5,
        },
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          opacity: 0.5,
        },
      },
    },
    grid: {
      top: 40,
      right: 20,
      bottom: 40,
      left: 20,
      containLabel: true,
    },
    series: [
      {
        name: 'Alerts',
        type: 'bar',
        data: [120, 160, 150, 80, 70, 110, 130, 90, 100, 80],
        itemStyle: {
          color: '#FFA500', // Alerts bar color
        },
      },
      {
        name: 'Resolved',
        type: 'bar',
        data: [80, 120, 100, 60, 50, 80, 90, 70, 80, 60],
        itemStyle: {
          color: '#00008B', // Resolved bar color
        },
      },
    ],
  };

  return (
    <div className='border-2 border-gray-300 shadow-lg rounded-lg md:w-[47%] w-full'>
      <div className='border-b-2 flex justify-between px-2'>
        <p className='m-2 font-bold'>{title}</p>
        <MdInfo size={25} className='text-gray-400 mt-2' />
      </div>
      <ReactECharts option={chartOptions} className="p-4" />
    </div>
  );
};

export default SOCChart;
