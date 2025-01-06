import React from 'react'
interface WeatherValues{
  description?:string,
  icon?:string,
  temp?:number,
  thermal_sensation?:number,
  temp_max?:number,
  temp_min?:number
}
export const WeatherTemperature:React.FC<WeatherValues>= ({description='', icon='13d', temp=0, thermal_sensation=0, temp_max=0, temp_min=0}) => {
  return (
    <section className='weatherTemperature'>
        <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
        <div className="temperature">
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" className='temperature__icon' />
            <p>{temp}°K</p>
        </div>
        <p>Thermal sensation: {thermal_sensation}°K</p>
        <div className='temp-minmax'>
            <p className='temp-min'>{temp_min}°K </p>
            <p>/</p>
            <p className='temp-max'>{temp_max}°K</p>
        </div>
    </section>
  )
}
