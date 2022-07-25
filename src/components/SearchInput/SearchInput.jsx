import React from 'react'
import './SearchInput.css';

export default function SearchInput({ value, onChange }) {
  return (
    <input 
    type="text" 
    value={value} 
    onChange={onChange} placeholder="Search"
    className='search'/>
  )
}
