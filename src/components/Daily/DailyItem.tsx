import React,{useState,useEffect} from 'react'
import { useLanguage } from '../Context/ContextLanguage'
import { useSettings } from '../Context/ContextSettings'
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
interface TemperatureValue{
    temp_min:number,
    temp_max:number
}
export const DailyItem:React.FC<PropsDailyValue> = ({time, day,description, nameImage, temp_max, temp_min,sunrise,sunset}) => {
    const {settings}=useSettings()
    const {language}=useLanguage()
    const [temperature,setTemperature]=useState<TemperatureValue | undefined>(undefined)
    const calculateTemp=(temp:number, unit: '°F' | '°K' | '°C')=>{
        const calculate={
          '°F':(temp*9)/5 + 32,
          '°K':temp+273.15,
          '°C':temp
        }
        return calculate[unit]
      }
      const handleTemperatureValue=(temp_min:number, temp_max:number, unit:'°F' | '°K' | '°C')=>{
        const min=calculateTemp(temp_min, unit)
        const max=calculateTemp(temp_max,unit)
        setTemperature({
          temp_min:min,
          temp_max:max
        })
      }
      useEffect(()=>{
        handleTemperatureValue(temp_min, temp_max, settings?.temperature as '°F'| '°K'| '°C')
       
      },[settings?.temperature])
  return (
    <div className="dailyItem">
        <div className="dailyItem__time">
            <p>{day}</p>
            <p>{time}</p>
        </div>
        <div className="dailyItem__temperature">
            <img src={`/public/icons/${nameImage}.png`} alt={nameImage} className='icon' />
            <div className="minmax">
              <p className='min'>{temperature?.temp_min.toFixed(2)}{settings?.temperature}</p>
              <p>&nbsp; / &nbsp;</p>
              <p className='max'>{temperature?.temp_max.toFixed(2)}{settings?.temperature}</p>
            </div>
        </div>
        <div className="dailyItem__description">
            {description}
        </div>
        <div className="dailyItem__sun">
            <div className="sunrise">
                <p>{language ? 'Sunrise:' : 'Salida de Sol:'}</p>
                <p>{sunrise}</p>
            </div>
            <div className="sunset">
                <p>{language ? 'Sunset:' : 'Puesta de Sol:'}</p>
                <p>{sunset}</p>
            </div>
        </div>
    </div>
  )
}
