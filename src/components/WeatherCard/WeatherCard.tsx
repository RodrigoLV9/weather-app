import React,{useEffect, useState} from 'react'
import { WeatherHeader } from './WeatherHeader'
import { WeatherTemperature } from './WeatherTemperature'
import { WeatherDetails } from './WeatherDetails'
import '../../styles/WeatherCard.css'
import { usePlace } from '../Context/ContextPlace'
import { useLanguage } from '../Context/ContextLanguage'
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
  wind_deg:number,
  hour:number,
  min:number
}
export const WeatherCard:React.FC = () => {
  const {language}=useLanguage()
  const [info, setInfo]=useState<InfoValue | undefined>(undefined)
  const {place}=usePlace()
  const getTime = (unixUTC: number, lag: number) => {
    const timeCurrent = unixUTC + lag;
    const date = new Date(timeCurrent * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return [hours,minutes]
  };
  useEffect(()=>{
    const fetchApiWeather=async()=>{
      if(place){
        const rawData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place?.city},${place?.country}&units=metric&APPID=${key}&lang=${language?'en':'es'}`)
        const data=await rawData.json()
        const [hour,min]=getTime(data.dt,data.timezone )
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
          wind_deg:data.wind.deg,
          hour:hour,
          min:min,
        })
      }
    }
    fetchApiWeather()
    
  },[place, language])
  return (
    <section className='weatherCard'>
        <WeatherHeader hours={info?.hour ?? 0} minutes={info?.min ?? 0}/>
        <WeatherTemperature description={info?.description} icon={info?.icon} temp={info?.temp} thermal_sensation={info?.thermal_sensation} temp_max={info?.temp_max} temp_min={info?.temp_min}/>
        <WeatherDetails humidity={info?.humidity} pressure={info?.pressure} wind_speed={info?.wind_speed} wind_deg={info?.wind_deg} />
    </section>
  )
}
