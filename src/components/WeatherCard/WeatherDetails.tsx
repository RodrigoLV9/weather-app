import React,{useEffect, useState} from 'react'
import { PiSpeedometerFill } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { WiWindDeg } from "react-icons/wi";
import { useLanguage } from '../Context/ContextLanguage';
import { useSettings } from '../Context/ContextSettings';
interface DetailsValues{
    humidity?:number,
    pressure?:number,
    wind_speed?:number,
    wind_deg?:number
}
export const WeatherDetails:React.FC<DetailsValues> = ({humidity=0,pressure=0,wind_speed=0,wind_deg=0}) => {
    const {language}=useLanguage()
    const {settings}=useSettings()
    const [wind, setWind]=useState<number | undefined>(undefined)
    const calculateWindSpeed=(windSpeedValue:number,unit:'km/h'|'m/s')=>{
        const calculateWind={
            'km/h':windSpeedValue,
            'm/s':windSpeedValue/3.6
        }
        return calculateWind[unit]
    }
    useEffect(()=>{
        const windSpeedResult=calculateWindSpeed(wind_speed, settings?.wind as 'km/h' | 'm/s')
        setWind(windSpeedResult)
    },[settings?.wind, wind_speed])

  return (
    <section className="weatherDetails">
        <div className="weatherDetails__item">
            <WiHumidity className='weatherDetails__item-icon'/>
            <p>{language ? 'Humidity:' : 'Humedad:'} {humidity}%</p>
        </div>
        <div className="weatherDetails__item">
            <PiSpeedometerFill />
            <p>{language ? 'Pressure:':'Presion:'} {pressure}hPa</p>
        </div>
        <div className="weatherDetails__item">
            <FaWind className='weatherDetails__item-icon'/>
            <p>{language ? 'Wind:':'Viento'} {wind?.toFixed(2)} {settings?.wind}</p>
        </div>
        <div className="weatherDetails__item">
            <WiWindDeg className='weatherDetails__item-icon'/>
            <p>{language ? 'Wind angle:' : 'Angulo viento:'} {wind_deg}°</p>
        </div>
    </section>
  )
}
