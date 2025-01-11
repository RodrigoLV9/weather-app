import React, {useEffect} from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { usePlace } from '../Context/ContextPlace';
import { useLanguage } from '../Context/ContextLanguage';
const key_ipinfo=import.meta.env.VITE_AK_IPINFO
interface WeatherHeaderProps{
  hours:number,
  minutes:number
}
export const WeatherHeader:React.FC <WeatherHeaderProps>= ({hours,minutes}) => {
  const {place, setPlace}=usePlace()
  const {language}=useLanguage()
  useEffect(()=>{
    const fetchLocationData= async ()=>{
      const rawData=await fetch(`https://ipinfo.io/json?token=${key_ipinfo}`)
      const data=await rawData.json()
      const [lat,lon]=data.loc.split(',')
      setPlace({
        city:data.city,
        state:data.region,
        country:data.country,
        lon:lon,
        lat:lat,

      })
    }
    fetchLocationData()
  },[setPlace])

  return (
    <section className='weatherHeader'>
        <div className='weatherHeader__time'>
            <p>{language ? 'The weather now' : 'El clima ahora'}</p>
            <p>{`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`}</p>
        </div>
        <div className='weatherHeader__location'>
            <FaLocationDot/>
            <p>{`${place?.city}, ${place?.state}, ${place?.country}`}</p>
        </div>
    </section>
  )
}
