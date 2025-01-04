import React from 'react'
import { IoRainy } from "react-icons/io5";
export const DailyItem:React.FC = () => {
  return (
    <div className="dailyItem">
        <div className="dailyItem__time">
            <p>Hoy</p>
            <p>1/1</p>
        </div>
        <div className="dailyItem__temperature">
            <IoRainy className='icon'/>
            <p>16°C / 26°C</p>
        </div>
        <div className="dailyItem__description">
            Scattered clouds
        </div>
        <div className="dailyItem__sun">
            <div className="sunrise">
                <p>Sunrise</p>
                <p>5:45</p>
            </div>
            <div className="sunset">
                <p>Sunset</p>
                <p>20:10</p>
            </div>
        </div>
    </div>
  )
}
