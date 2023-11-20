
import './App.css';

import { Routes,Route, Form } from 'react-router-dom';
import Home from './Compenents/HOME/Home';
import Calculator from './Compenents/TP1/Calculator';
import Slider from "./Compenents/TP2/Slider";
import Forma_Task from './Compenents/TP3/Forma_Task';
import Tp4 from './Compenents/TP4/Tp4';
import NavBar from './Compenents/NavBar/NavBar';
import PageEror from "./Compenents/PageEror/PageEror"

import ReactSwitch from 'react-switch';
import { useState } from 'react';
import { useThemeContext } from './Dark_Mode/ThemeContext';

function App() {
   const {CTheme,setCTheme}=useThemeContext()
   const [checked,setChecked]=useState(false)
    const handleSwitch=(nextChecked)=>{
      setCTheme((state)=>(state==="light"?"dark":"light"))
      setChecked(nextChecked)
      console.log(nextChecked)
    }

  return (
    <div className="App" id={CTheme}>
     
        
        <ReactSwitch
            onChange={handleSwitch}
            checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            
        />
     <NavBar/>
     <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/Tp1' element={<Calculator/>}/>
    <Route  path='/Tp2' element={<Slider/>}/>
    <Route  path='/Tp3' element={<Forma_Task/>}/>
    <Route  path='/Tp4' element={<Tp4/>}/>
    <Route path="*" element={<PageEror/>}/>

  </Routes>
      
    </div>
  );
}

export default App;
