import React from 'react'
import '../styles/Footer.css'
import { useLanguage } from './Context/ContextLanguage'
export const Footer:React.FC = () => {
  const {language}=useLanguage()
  return (
    <footer className='footer'>
      <p>{language ? 'Made by RodrigoLV' : 'Hecho por RodrigoLV'}</p>
      <p>{language ? '© 2025 App Weather Now' : '© 2025 Clima Ahora'}</p>
      <p>{language ? 'My portfolio' : 'Mi portfolio'}</p>
    </footer>
  )
}
