import React from 'react'
import { IoRainy } from "react-icons/io5";

interface PropsDailyValue{
    time:string,
    day:string,
    description:string,
    temp_max:number,
    temp_min:number,
    sunrise:string,
    sunset:string
}
export const DailyItem:React.FC<PropsDailyValue> = ({time, day,description, temp_max, temp_min,sunrise,sunset}) => {

  return (
    <div className="dailyItem">
        <div className="dailyItem__time">
            <p>{day}</p>
            <p>{time}</p>
        </div>
        <div className="dailyItem__temperature">
            <IoRainy className='icon'/>
            <p>{temp_max}°C / {temp_min}°C</p>
        </div>
        <div className="dailyItem__description">
            {description}
        </div>
        <div className="dailyItem__sun">
            <div className="sunrise">
                <p>Sunrise</p>
                <p>{sunrise}</p>
            </div>
            <div className="sunset">
                <p>Sunset</p>
                <p>{sunset}</p>
            </div>
        </div>
    </div>
  )
}
