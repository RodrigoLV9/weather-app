import React,{useEffect, useState} from 'react'
import { useLanguage } from '../Context/ContextLanguage'
import { useSettings } from '../Context/ContextSettings'
interface WeatherValues{
  description?:string,
  icon?:string,
  temp?:number,
  thermal_sensation?:number,
  temp_max?:number,
  temp_min?:number
}
interface Temperature{
  temp:number,
  temp_sensation:number,
  temp_min:number,
  temp_max:number

}
export const WeatherTemperature:React.FC<WeatherValues>= ({description='', icon='13d', temp=0, thermal_sensation=0, temp_max=0, temp_min=0}) => {
  const [temperature, setTemperature]=useState<Temperature | undefined>(undefined)
  const {settings}=useSettings()
  const {language}=useLanguage()
  const calculateTemp=(temp:number, unit: '°F' | '°K' | '°C')=>{
    const calculate={
      '°F':(temp*9)/5 + 32,
      '°K':temp+273.15,
      '°C':temp
    }
    return calculate[unit]
  }
  const handleTemperatureValue=(temp:number, temp_sensation:number, temp_min:number, temp_max:number, unit:'°F' | '°K' | '°C')=>{
    const temp1=calculateTemp(temp, unit)
    const sensation=calculateTemp(temp_sensation,unit)
    const min=calculateTemp(temp_min, unit)
    const max=calculateTemp(temp_max,unit)
    setTemperature({
      temp:temp1,
      temp_sensation:sensation,
      temp_min:min,
      temp_max:max
    })
  }
  useEffect(() => {
    if (settings?.temperature) {
      handleTemperatureValue(temp,thermal_sensation, temp_min, temp_max, settings.temperature as '°F' | '°K' | '°C');
    }
  }, [settings?.temperature, temp, temp_max, temp_min, 
    thermal_sensation]);
  return (
    <section className='weatherTemperature'>
        <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
        <div className="temperature">
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" className='temperature__icon' />
            <p>{temperature?.temp.toFixed(2)}{settings?.temperature}</p>
        </div>
        <p>{language ? 'Thermal sensation:' : 'Sensacion Termica'} {temperature?.temp_sensation.toFixed(2)}{settings?.temperature}</p>
        <div className='temp-minmax'>
            <p className='temp-min'>{temperature?.temp_min.toFixed(2)}{settings?.temperature}</p>
            <p>/</p>
            <p className='temp-max'>{temperature?.temp_max.toFixed(2)}{settings?.temperature}</p>
        </div>
    </section>
  )
}
