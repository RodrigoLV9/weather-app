import React from 'react'
import { PiSpeedometerFill } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { WiWindDeg } from "react-icons/wi";

interface DetailsValues{
    humidity?:number,
    pressure?:number,
    wind_speed?:number,
    wind_deg?:number
}
export const WeatherDetails:React.FC<DetailsValues> = ({humidity=0,pressure=0,wind_speed=0,wind_deg=0}) => {
  return (
    <section className="weatherDetails">
        <div className="weatherDetails__item">
            <WiHumidity className='weatherDetails__item-icon'/>
            <p>Humidity: {humidity}%</p>
        </div>
        <div className="weatherDetails__item">
            <PiSpeedometerFill />
            <p>Pressure: {pressure}hPa</p>
        </div>
        <div className="weatherDetails__item">
            <FaWind className='weatherDetails__item-icon'/>
            <p>Wind: {wind_speed} km/h</p>
        </div>
        <div className="weatherDetails__item">
            <WiWindDeg className='weatherDetails__item-icon'/>
            <p>Wind deg: {wind_deg}deg</p>
        </div>
    </section>
  )
}
