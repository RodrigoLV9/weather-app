import React from 'react'
import { Brand } from './Brand'
import {Controls} from './Controls'
export const Header:React.FC = () => {
  return (
    <header>
        <Brand/>
        <Controls/>
    </header>
  )
}

