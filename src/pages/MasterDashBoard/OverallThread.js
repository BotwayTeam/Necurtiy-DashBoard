import React from 'react'
import ReactECharts from 'echarts-for-react';
import { MdInfo } from 'react-icons/md';

const OverallThread = ({title}) => {
    const chartOptions = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 0,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: true,
              fontSize: 10,
              fontWeight: 'bold',
              position: 'center'
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: 10,
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              { value: 20, name: 'Server handling' },
              { value: 20, name: 'Dark web' },
              { value: 5, name: 'Phishing ans simulation and simulation' },
              { value: 15, name: 'VAPT Cloud' },
              { value: 40, name: 'VAPT network' }
            ]
          }
        ]
      };
  return (
    <div className='border-2 border-gray-300 shadow-lg rounded-lg md:w-[27%] w-full'>
    <div className='border-b-2 flex justify-between px-2'><p className='m-2 font-bold'>{title}</p><MdInfo size={25} className='text-gray-400 mt-2'/></div>
    <ReactECharts 
    option={chartOptions} 
    className="p-4"/>
    {/* <div><div className='w-4 bg-[#FF5733]'></div><p>Total Vulnerabilites</p></div>
    <div><div className='w-4 bg-[#C70039]'><p>Fixed</p></div></div> */}
    </div>
  )
}

export default OverallThread