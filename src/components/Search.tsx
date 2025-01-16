import React, { useRef, useState, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import '../styles/Search.css';
import { usePlace } from './Context/ContextPlace';
import { useLanguage } from './Context/ContextLanguage';
const key_op = import.meta.env.VITE_AK_OPENWEATHER;

interface Place {
  name: string;
  state: string;
  country: string;
  lon:string;
  lat:string
}

export const Search: React.FC = () => {
  const {language}=useLanguage()
  const {setPlace } = usePlace();
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const loc_ref = useRef<HTMLInputElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const selectedPlace = places.find(place => `${place.name}, ${place.state}, ${place.country}` === event.target.value);
    if (selectedPlace) {
      setPlace({
        city: selectedPlace.name,
        state: selectedPlace.state,
        country: selectedPlace.country,
        lon:selectedPlace.lon,
        lat:selectedPlace.lat
      });
    }
  };

  useEffect(() => {
    const fetchPlacesData = async () => {
      if (searchTerm) {
        const rawData = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${key_op}`);
        const data = await rawData.json();
        setPlaces(data);
      }

    };
    fetchPlacesData();
  }, [searchTerm]);

  return (
    <section className='search'>
      <input
        type="text"
        placeholder={language ? 'Write city, state and country' : 'Escribir ciudad, estado y pais'}
        ref={loc_ref}
        list='locations'
        onChange={handleChange}
      />
      <datalist id='locations'>
        {
          places.map((e, index) => (
            <option key={index} value={`${e.name}, ${e.state}, ${e.country}`}></option>
          ))
        }
      </datalist>

      <button>
        <IoMdSearch className='search__icon' />
      </button>
    </section>
  );
};