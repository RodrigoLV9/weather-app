import React,{createContext, useContext, useState, ReactNode} from 'react'
interface MyContext{
  language:boolean | undefined,
  setLanguage:(e:boolean)=>void
}
const MyContextLanguage=createContext<MyContext | undefined>(undefined)
export const ContextLanguage:React.FC<{children:ReactNode}> = ({children}) => {
    const [language, setLanguage]=useState<boolean | undefined>(true)
  return (
    <MyContextLanguage.Provider value={{language, setLanguage}}>
        {children}
    </MyContextLanguage.Provider>
  )
}

export const useLanguage=()=>{
  const context=useContext(MyContextLanguage)
  if(!context){
    throw new Error('Error in Context')
  }
  return context
}