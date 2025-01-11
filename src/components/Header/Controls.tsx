import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { useLanguage } from '../Context/ContextLanguage';
export const Controls:React.FC = () => {
  const {language,setLanguage}=useLanguage()
  const handleIdiom=()=>{
    setLanguage(!language)
  }
  return (
    <div className='controls'>
      <button onClick={handleIdiom}>
        {language ? <img src="./images/english.png" alt="español-logo"/> : <img src="./images/spanish.png" alt="english-icon"/>}
      </button>
      <IoMdSettings className='controls__settings'/>
    </div>
  )
}
