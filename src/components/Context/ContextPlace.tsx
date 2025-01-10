import React, {createContext, ReactNode, useContext, useState} from 'react'
interface PlaceValue{
  city:string,
  state:string,
  country:string,
  lon:string,
  lat:string
  
}
interface PlaceContextValue{
  place:PlaceValue |undefined,
  setPlace: React.Dispatch<React.SetStateAction<PlaceValue | undefined>>
}

const MyContextPlace=createContext<PlaceContextValue | undefined>(undefined)

export const ContextPlace:React.FC<{children:ReactNode}> = ({children}) => {
  const [place, setPlace]=useState<PlaceValue | undefined>(undefined)
  return (
    <MyContextPlace.Provider value={{place, setPlace}}>
      {children}
    </MyContextPlace.Provider>
  )
}

export const usePlace=()=>{
    const context=useContext(MyContextPlace)
    if(!context){
      throw new Error("Error in the ContextPlace")
    }
    return context
    
}