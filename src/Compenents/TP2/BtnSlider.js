import React from 'react'
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider(props) {
  return (
    <div>
       <button onClick={props.moveSlider} className={props.direction==="next"?"btn-slide next ":"btn-slide prev"}>
        <img src={props.direction==="next"?rightArrow:leftArrow} alt="" />
       </button>
    </div>
  )
}
