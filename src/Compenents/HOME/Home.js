import React from 'react'
import NavBar from "../NavBar/NavBar"
import logo1 from "./logo.svg"

import logo2 from "./logo1.jpg"

import Context_Content from './Context1/Context_Content';
import CompImg from './Context1/Context_ICon';
import LangContext from './Context1/LangContext';



export default function Home() {
  return (
    <div >
         <LangContext>
     <CompImg/>
      <Context_Content/>
      </LangContext>
      <img src={logo1} className='App-logo ' alt="" />
  <br /> 
   
 
    </div>
  )
}
