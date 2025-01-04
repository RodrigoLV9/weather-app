import React from 'react'

export const WeatherDetails:React.FC = () => {
  return (
    <section className="weatherDetails">
        <div className="weatherDetails__item">
            <p>Humidity</p>
            <p>80%</p>
        </div>
        <div className="weatherDetails__item">
            <p>Pressure</p>
            <p>1013 hPa</p>
        </div>
        <div className="weatherDetails__item">
            <p>Wind</p>
            <p>10 km/h</p>
        </div>
        <div className="weatherDetails__item">
            <p>Visibility</p>
            <p>10 km</p>
        </div>
    </section>
  )
}
