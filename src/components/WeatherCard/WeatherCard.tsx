import React from 'react'
import { WeatherHeader } from './WeatherHeader'
import { WeatherTemperature } from './WeatherTemperature'
import { WeatherDetails } from './WeatherDetails'
import '../../styles/WeatherCard.css'
export const WeatherCard:React.FC = () => {

  return (
    <section className='weatherCard'>
        <WeatherHeader/>
        <WeatherTemperature/>
        <WeatherDetails/>
    </section>
  )
}
