import React, { useEffect, useState } from 'react';
import { DailyItem } from './DailyItem';
import '../../styles/Daily.css';
import { usePlace } from '../Context/ContextPlace';


interface DailyForecast {
  date: string;
  maxTemp: number;
  minTemp: number;
  weatherCode: number;
  sunrise: string;
  sunset: string;
}

export const Daily: React.FC = () => {
  const [dataDaily, setDataDaily] = useState<DailyForecast[]>([]);
  const { place } = usePlace();

  const handleDataDaily = (dailyData) => {
    // Mapea los datos relevantes de `daily`
    const processedData = dailyData.daily.time.map((_, index: number) => ({
      date: dailyData.daily.time[index],
      maxTemp: dailyData.daily.temperature_2m_max[index],
      minTemp: dailyData.daily.temperature_2m_min[index],
      weatherCode: dailyData.daily.weathercode[index],
      sunrise: dailyData.daily.sunrise[index],
      sunset: dailyData.daily.sunset[index],
    }));
    setDataDaily(processedData); // Actualiza el estado con los datos procesados
  };

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&daily=temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset&timezone=auto`
        );
        const data = await response.json();
        handleDataDaily(data);
      } catch (error) {
        console.error('Error fetching daily forecast:', error);
      }
    };
    fetchForecast();
  }, [place]);

  return (
    <section className="daily">
      <div className="daily__title">Daily Forecast</div>
      <DailyItem/>
    </section>
  );
};
