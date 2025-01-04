import React from 'react'
import {DailyItem} from './DailyItem'
import '../../styles/Daily.css'
export const Daily:React.FC = () => {
  return (
    <section className="daily">
        <div className="daily__title">Daily Forecast</div>
        <DailyItem/>
        <DailyItem/>
        <DailyItem/>
        <DailyItem/>
    </section>
  )
}
