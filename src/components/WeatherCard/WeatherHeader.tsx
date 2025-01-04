import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
export const WeatherHeader:React.FC = () => {
  return (
    <section className='weatherHeader'>
        <div className='weatherHeader__time'>
            <p>The weather now</p>
            <p>20:35</p>
        </div>
        <div className='weatherHeader__location'>
            <FaLocationDot/>
            <p>Ezpeleta, Buenos Aires, Argentina</p>
        </div>
    </section>
  )
}
