import React,{useState, useEffect} from 'react'
import { IoMdSettings } from "react-icons/io";
import { useLanguage } from '../Context/ContextLanguage';
import { useSettings } from '../Context/ContextSettings';
const dataSettings={
  'temperature':[
    {
      'name':'Celsius',
      'value':'°C'
    },
    {
      'name':'Kelvin',
      'value':'°K'
    },
    {
      'name':'Fahrenheit',
      'value':'°F'
    },
  ],
  'wind':['km/h','m/s']
}
export const Controls:React.FC = () => {
  const {settings, setSettings}=useSettings()
  const [modal,setModal]=useState<boolean>(false)
  const [selectTemperature, setSelectTemperature]=useState<string | undefined>('°C')
  const [selectWind, setSelectWind]=useState<string | undefined>('km/h')
  const {language,setLanguage}=useLanguage()
  const handleIdiom=()=>{
    setLanguage(!language)
  }
  const handleModal=()=>{
    setModal(!modal)
  }
  const handleTemperature=(option:string)=>{
    setSelectTemperature(option)
  }
  const handleWind=(option:string)=>{
    setSelectWind(option)
  }
  const handleButton=()=>{
    setSettings({
      temperature:selectTemperature,
      wind:selectWind
    })
    setModal(!modal)
  }
  useEffect(()=>{
    console.log(settings)
  },[settings])
  return (
    <div className='controls'>
      <button onClick={handleIdiom} className='controls__button'>
        {language ? <img src="./images/english.png" alt="español-logo"/> : <img src="./images/spanish.png" alt="english-icon"/>}
      </button>
      <button onClick={handleModal} className='controls__button'>
        <IoMdSettings className='controls__settings'/>
      </button>
      <div className={`modalSettings ${modal ? 'modalSettings-modified':''}`}>
        <div className="modalSettings__item">
          <h5>Temperature</h5>
          <div className="container-button">
            {
              dataSettings.temperature.map((item,index)=>(
                <button onClick={()=>handleTemperature(item.value)} className={selectTemperature===item.value ? 'button-active' : ''} key={index}>{`${item.name} ${item.value}`}</button>
              ))
            }
          </div>
        </div>
        <div className="modalSettings__item">
          <h5>Wind</h5>
          <div className="container-button">
            {
              dataSettings.wind.map((item, index)=>(
                <button onClick={()=>handleWind(item)} className={selectWind===item ? 'button-active' : ''} key={index}>{item}</button>
              ))
            }
          </div>
        </div>
        <button className="modalSettings__button" onClick={handleButton}>
            Aceptar
        </button>
      </div>
    </div>
  )
}
