import React,{useEffect, useState} from 'react'
import { WeatherHeader } from './WeatherHeader'
import { WeatherTemperature } from './WeatherTemperature'
import { WeatherDetails } from './WeatherDetails'
import '../../styles/WeatherCard.css'
import { usePlace } from '../Context/ContextPlace'
const key=import.meta.env.VITE_AK_OPENWEATHER
interface InfoValue{
  description:string,
  icon:string,
  thermal_sensation:number,
  temp:number,
  temp_max:number,
  temp_min:number,
  humidity:number,
  pressure:number,
  wind_speed:number,
  wind_deg:number
}
export const WeatherCard:React.FC = () => {
  const [info, setInfo]=useState<InfoValue | undefined>(undefined)
  const {place}=usePlace()
  useEffect(()=>{
    const fetchApiWeather=async()=>{
      if(place){
        const rawData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place?.city},${place?.country}&units=metric&APPID=${key}`)
        const data=await rawData.json()
        setInfo({
          description: data.weather[0].description,
          icon:data.weather[0].icon,
          thermal_sensation:data.main.feels_like,
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind_speed: data.wind.speed,
          wind_deg:data.wind.deg
        })
      }
    }
    fetchApiWeather()
    
  },[place])
  return (
    <section className='weatherCard'>
        <WeatherHeader/>
        <WeatherTemperature description={info?.description} icon={info?.icon} temp={info?.temp} thermal_sensation={info?.thermal_sensation} temp_max={info?.temp_max} temp_min={info?.temp_min}/>
        <WeatherDetails humidity={info?.humidity} pressure={info?.pressure} wind_speed={info?.wind_speed} wind_deg={info?.wind_deg} />
    </section>
  )
}
