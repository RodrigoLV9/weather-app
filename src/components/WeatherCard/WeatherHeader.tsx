import React, {useState, useEffect} from 'react'
import { FaLocationDot } from "react-icons/fa6";
const key_ipinfo=import.meta.env.VITE_AK_IPINFO
export const WeatherHeader:React.FC = () => {
  const [location, setLocation]=useState('')
  const [city, setCity]=useState("Bernal")
  const [region, setRegion]=useState("Buenos Aires")
  const [country, setCountry]=useState("AR")
  
  useEffect(()=>{
    const fetchLocationData= async ()=>{
      const rawData=await fetch(`https://ipinfo.io/json?token=${key_ipinfo}`)
      const data=await rawData.json()
      setCity(data.city)
      setRegion(data.region)
      setCountry(data.country)
      setLocation(data.loc)
    }
    fetchLocationData()
  },[])
  console.log(location)
  return (
    <section className='weatherHeader'>
        <div className='weatherHeader__time'>
            <p>The weather now</p>
            <p>20:35</p>
        </div>
        <div className='weatherHeader__location'>
            <FaLocationDot/>
            <p>{`${city}, ${region}, ${country}`}</p>
        </div>
    </section>
  )
}
