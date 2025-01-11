import React from 'react'
import { useLanguage } from '../Context/ContextLanguage'
interface PropsDailyValue{
    time:string,
    day:string,
    description:string,
    nameImage:string,
    temp_max:number,
    temp_min:number,
    sunrise:string,
    sunset:string
}
export const DailyItem:React.FC<PropsDailyValue> = ({time, day,description, nameImage, temp_max, temp_min,sunrise,sunset}) => {
    const {language}=useLanguage()
  return (
    <div className="dailyItem">
        <div className="dailyItem__time">
            <p>{day}</p>
            <p>{time}</p>
        </div>
        <div className="dailyItem__temperature">
            <img src={`/public/icons/${nameImage}.png`} alt={nameImage} className='icon' />
            <p>{temp_max}°C / {temp_min}°C</p>
        </div>
        <div className="dailyItem__description">
            {description}
        </div>
        <div className="dailyItem__sun">
            <div className="sunrise">
                <p>{language ? 'Sunrise' : 'Salida de Sol'}</p>
                <p>{sunrise}</p>
            </div>
            <div className="sunset">
                <p>{language ? 'Sunset' : 'Puesta de Sol'}</p>
                <p>{sunset}</p>
            </div>
        </div>
    </div>
  )
}
