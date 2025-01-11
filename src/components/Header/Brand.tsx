
import React/* ,{useState} */ from 'react'
import { useLanguage } from '../Context/ContextLanguage'

export const Brand:React.FC = () => {
  const {language}=useLanguage()
  return (
    <div className='brand'>
      <img src="/images/weather-icon.png" alt='app-logo'/>
      <h2>{language ? 'Weather Now' : 'Clima Ahora'}</h2>
    </div>
  )
}
