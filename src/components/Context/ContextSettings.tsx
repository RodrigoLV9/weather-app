import React, {createContext, useContext, useState, ReactNode} from 'react'
interface settingsValue{
    temperature:string | undefined,
    wind:string | undefined
}
interface ContextValue{
    settings:settingsValue | undefined,
    setSettings:(e:settingsValue)=>void
}
const MyContextSettings=createContext<ContextValue | undefined>(undefined)
export const ContextSettings:React.FC<{children:ReactNode}> = ({children}) => {
    const [settings, setSettings]=useState<settingsValue | undefined>({temperature:'°C',wind:'km/h'})
  return (
    <MyContextSettings.Provider value={{settings, setSettings}}>
        {children}
    </MyContextSettings.Provider>
  )
}
export const useSettings=()=>{
    const context=useContext(MyContextSettings)
    if(!context){
        throw new Error('Error in ContextSettings')
    }
    return context
}