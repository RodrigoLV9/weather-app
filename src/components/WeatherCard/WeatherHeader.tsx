import React, {useEffect} from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { usePlace } from '../Context/ContextPlace';
const key_ipinfo=import.meta.env.VITE_AK_IPINFO
export const WeatherHeader:React.FC = () => {
  const {place, setPlace}=usePlace()

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
            <p>The weather now</p>
            <p>20:35</p>
        </div>
        <div className='weatherHeader__location'>
            <FaLocationDot/>
            <p>{`${place?.city}, ${place?.state}, ${place?.country}`}</p>
        </div>
    </section>
  )
}
