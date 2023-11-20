import React, { useContext } from 'react'
import { LangC } from './LangContext'
import data from './data';
export default function Context_Content() {
  const {Lang,setLang}=useContext(LangC);
  return (
    <div className='text'>
      <h1 style={{fontSize:"4eM",fontFamily:"sans-serif",color:"#61dafb"}} >{data[Lang].Title}</h1> <br />
      <p style={{fontSize:"1.5eM",fontFamily:"sans-serif",color:"#61dafb"}}  > {data[Lang].Txt}</p>
      <p style={{fontSize:"1eM",fontFamily:"sans-serif",color:"#61dafb"}}  > {data[Lang].p}</p>
    </div>
  )
}
