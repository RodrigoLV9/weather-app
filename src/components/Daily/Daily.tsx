import React, { useEffect, useState } from 'react';
import { DailyItem } from './DailyItem';
import '../../styles/Daily.css';
import { usePlace } from '../Context/ContextPlace';

const weatherCategoriesES: {[key:number]:string} = {
  0: "Soleado",
  1: "Parcialmente nublado",
  2: "Parcialmente nublado",
  3: "Nublado",
  45: "Neblina",
  48: "Neblina",
  51: "Lluvia ligera",
  53: "Lluvia ligera",
  55: "Lluvia fuerte",
  61: "Lluvia ligera",
  63: "Lluvia fuerte",
  65: "Lluvia fuerte",
  66: "Lluvia ligera",
  67: "Lluvia fuerte",
  71: "Nieve ligera",
  73: "Nieve moderada",
  75: "Nieve intensa",
  77: "Nieve ligera",
  80: "Lluvia ligera",
  81: "Lluvia fuerte",
  82: "Lluvia fuerte",
  95: "Tormenta",
  96: "Tormenta con granizo",
  99: "Tormenta con granizo"
};
const weatherCategoriesEN: { [key: number]: string } = {
  0: "Sunny",
  1: "Partly cloudy",
  2: "Partly cloudy",
  3: "Cloudy",
  45: "Fog",
  48: "Fog",
  51: "Light rain",
  53: "Light rain",
  55: "Heavy rain",
  61: "Light rain",
  63: "Heavy rain",
  65: "Heavy rain",
  66: "Light rain",
  67: "Heavy rain",
  71: "Light snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Light snow",
  80: "Light rain",
  81: "Heavy rain",
  82: "Heavy rain",
  95: "Storm",
  96: "Storm with hail",
  99: "Storm with hail",
};

interface DailyForecast {
  date: string;
  day:string;
  description:string;
  icon:string;
  maxTemp: number;
  minTemp: number;
  weatherCode: number;
  sunrise: string;
  sunset: string;
}
interface DailyData {
  daily: {
    time: string[];
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
}

export const Daily: React.FC = () => {
  const [dataDaily, setDataDaily] = useState<DailyForecast[]>([]);
  const { place } = usePlace()
  const getDescription=(code:number)=>{
    return weatherCategoriesEN[code] ||  'Unknown weather'
  }
  function getDayOfWeek(dateString:string) {
    const date = new Date(dateString); // Convierte la fecha ISO en un objeto Date
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    return daysOfWeek[localDate.getDay()];
  }
  const handleDataDaily = (dailyData:DailyData) => {
    const processedData = dailyData.daily.time.map((_:string, index: number) =>{
      const sunrise_hour=dailyData.daily.sunrise[index].slice(-5)
      const sunset_hour=dailyData.daily.sunset[index].slice(-5)
      const date=dailyData.daily.time[index].slice(-4).replace('-','/')
      const day=getDayOfWeek(dailyData.daily.time[index])
      const description=getDescription(dailyData.daily.weathercode[index])
      return {
        date: date,
        day:day,
        description:description,
        maxTemp: dailyData.daily.temperature_2m_max[index],
        minTemp: dailyData.daily.temperature_2m_min[index],
        weatherCode: dailyData.daily.weathercode[index],
        sunrise: sunrise_hour,
        sunset: sunset_hour,
      }
    });
    setDataDaily(processedData);
  };

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&daily=temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset&timezone=auto`
        );
        const data = await response.json();
        handleDataDaily(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching daily forecast:', error);
      }
    };
    fetchForecast();
  }, [place]);

  return (
    <section className="daily">
      <div className="daily__title">Daily Forecast</div>
      {
        dataDaily.map((item,index)=>(
          <DailyItem key={index} time={item.date} day={item.day} description={item.description} temp_max={item.maxTemp} temp_min={item.minTemp} sunrise={item.sunrise} sunset={item.sunset}/>
        ))
      }
      
    </section>
  );
};
