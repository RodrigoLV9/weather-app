import React from 'react'
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
            <p>Humidity: {humidity}%</p>
        </div>
        <div className="weatherDetails__item">
            <p>Pressure: {pressure}hPa</p>
        </div>
        <div className="weatherDetails__item">
            <p>Wind: {wind_speed} km/h</p>
        </div>
        <div className="weatherDetails__item">
            <p>Wind deg: {wind_deg}deg</p>
        </div>
    </section>
  )
}
