import React from 'react'
import { Brand } from './Brand'
import {Controls} from './Controls'
import '../../styles/Header.css'
export const Header:React.FC = () => {
  return (
    <header className='header'>
        <Brand/>
        <Controls/>
    </header>
  )
}

