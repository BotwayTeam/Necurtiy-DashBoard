import React from 'react';
import ReactECharts from 'echarts-for-react';
import { MdInfo } from 'react-icons/md';

const NestedPieChart = ({title}) => {
  const mainChartData = [50];
  const nestedChartData = [20];

  const mainChartOptions = {
    color: ['#006F9D'],
    series: [
      {
        type: 'pie',
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
          formatter: '{c}%',
          fontSize: 24,
          color:'#FFFFFF'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: mainChartData[0], name: 'Main Chart' },
        ],
      },
    ],
  };

  const nestedChartOptions = {
    color: ['#F2722C'],
    series: [
      {
        type: 'pie',
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
          formatter: '{c}%',
          color:'#FFFFFF'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: nestedChartData[0], name: 'Nested Chart' },
        ],
      },
    ],
  };

  return (
    <div className='border-2 border-gray-300 shadow-lg rounded-lg md:w-[20%] w-full max-sm:h-72'>
           <div className='border-b-2 flex justify-between px-2'><p className='m-2 font-bold'>{title}</p><MdInfo size={25} className='text-gray-400 mt-2'/></div>
      <div>
        <ReactECharts option={mainChartOptions} style={{ height: '200px', width: '200px' }} className='' />
      </div>
      <div>
        <ReactECharts option={nestedChartOptions} style={{ height: '100px', width: '100px' }} className='max-sm:hidden absolute md:top-[1170px]  md:left-[400px] top-[153em] left-[7em]' />
      </div>
    </div>
  );
};

export default NestedPieChart;
