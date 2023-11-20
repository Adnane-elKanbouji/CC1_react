import React, { useState } from 'react'
import DataSlider from './DataSlider';
import "./Slider.css"
import BtnSlider from './BtnSlider'
export default function Slider() {
    const [index,setindex]=useState(1);
    const nextSlider=()=>{
        if( index !== DataSlider.length){
            setindex(index+1)     
        }else if(index===DataSlider.length){
            setindex(1)
        }
    }
    const prevSlider=()=>{
        if(index===1){
            setindex(DataSlider.length)
        }
        else if(index !==1){
            setindex(index-1)
        }
    }

  return (
    <div className='container-Slider'>
               <center><h1>L'image N : {index}</h1></center>   
        {DataSlider.map((obj)=>{
             return (
                <div key={index} className='Slider'>
                    
                    <img src={process.env.PUBLIC_URL+`/Imgs/img${index}.jpg`} alt="" />
                </div>
             )
        })}
        <BtnSlider direction="next" moveSlider={nextSlider} />
        <BtnSlider direction="prev" moveSlider={prevSlider} />
    </div>
  )
}
