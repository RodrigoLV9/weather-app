import React from 'react'
import { IoRainy } from "react-icons/io5";
export const WeatherTemperature:React.FC = () => {
  return (
    <section className='weatherTemperature'>
        <div className="temperature">
            <IoRainy className='temperature__icon'/>
            <p>22°C</p>
        </div>
        <p>Thermal sensation: 24°C</p>
        <div className='temp-minmax'>
            <p className='temp-min'>16°C </p>
            <p>/</p>
            <p className='temp-max'> 26°C</p>
        </div>
    </section>
  )
}
