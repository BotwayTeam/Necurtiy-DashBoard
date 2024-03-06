import React from 'react'
import ReactECharts from 'echarts-for-react';
import { MdInfo } from "react-icons/md";

const NetworkChart = ({title}) => {
    const chartOptions = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%','40%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 0.4
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 10,
                fontWeight: 'bold'
              }
            },
            data: [
              { value: 20, name: 'Fixed',itemStyle: { color: '#F3722B' } },
              { value: 80, name: 'Total Vulnerabilites',itemStyle:{color: '#F33F43'} }
            ]
          }
        ]
      };
  return (
    <div className='border-2 border-gray-300 shadow-lg rounded-lg md:w-3/12 w-full'>
        <div className='border-b-2 flex justify-between px-2'><p className='m-2 font-bold'>{title}</p><MdInfo size={25} className='text-gray-400 mt-2'/></div>
        <ReactECharts option={chartOptions} className=''/>
    </div>
  )
}

export default NetworkChart