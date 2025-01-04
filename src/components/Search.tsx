import React from 'react'
import { IoMdSearch } from "react-icons/io";
import '../styles/Search.css'
export const Search:React.FC = () => {
  return (
    <section className='search'>
        <input type="text" placeholder='Write country, city or state...'/>
        <button>
            <IoMdSearch className='search__icon'/>
        </button>
        
    </section>
  )
}
