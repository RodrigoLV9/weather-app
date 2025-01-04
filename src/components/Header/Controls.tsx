import React, {useState} from 'react'
import { IoMdSettings } from "react-icons/io";
export const Controls:React.FC = () => {
  const [idiom,setIdiom]=useState(true)
  const handleIdiom=()=>{
    setIdiom(!idiom)
  }
  return (
    <div className='controls'>
      <button onClick={handleIdiom}>
        {idiom ? <img src="./images/spanish.png" alt="country"/> : <img src="./images/english.png" alt="country"/>}
      </button>
      <IoMdSettings className='controls__settings'/>
    </div>
  )
}
