
import React, { useState } from 'react'
import "./Calculator.css"
export default function Calculator() {
    const [exp,setexp]=useState("");
    const [exp2,setexp2]=useState(0);
          
    const clear=()=>{
     setexp("");
    }
    const v=0;
    const resultat=()=>{
     try{
      setexp(eval(exp));
      setexp2(exp)
     }
     catch(error){
       setexp("Exp invalide")
     }
    
    } 
    const mod=()=>{
      setexp(eval(exp/100))
      setexp2(eval(exp/100))
    }
    
    const tapecar=(e)=>{
        let oldval=exp;
        let newval=oldval+e.target.value;

        setexp(newval);
        
      }
     
  return (
    
    <div class="container">
    <div class="cal-body">
      <div class="cal-screen">
        <div class="cal-operation">{exp2}</div>
        <div class="cal-typed">{exp}</div>
      </div>
      <div class="cal-btn-row">
        <button type='button' class="bton c" onClick={clear} >C</button>
        <button type='button' class="bton l" onClick={(e)=>tapecar(e)} value={'('} >(</button>
        <button  type='button' class="bton l" onClick={(e)=>tapecar(e)} value={')'} >)</button>
        <button  type='button' class="bton l" onClick={(e)=>tapecar(e)} value={'/'}>/</button>
      </div>
      <div class="cal-btn-row">
        <button type='button' class="bton" onClick={(e)=>tapecar(e)} value={7} >7</button>
        <button type='button' class="bton" onClick={(e)=>tapecar(e)}  value={8} >8</button>
        <button type='button' class="bton" onClick={(e)=>tapecar(e)} value={9} >9</button>
        <button type='button' class="bton l" onClick={(e)=>tapecar(e)} value={'*'} >x</button>
      </div>
      <div class="cal-btn-row">
        <button type='button' class="bton"onClick={(e)=>tapecar(e)} value={4} >4</button>
        <button type='button' class="bton" onClick={(e)=>tapecar(e)}value={5} >5</button>
        <button type='button' class="bton" onClick={(e)=>tapecar(e)} value={6}>6</button>
        <button  type='button' class="bton l"onClick={(e)=>tapecar(e)} value={'-'}>-</button>
      </div>
      <div class="cal-btn-row">
        <button  type='button' class="bton" onClick={(e)=>tapecar(e)} value={1} >1</button>
        <button  type='button' class="bton" onClick={(e)=>tapecar(e)} value={2} >2</button>
        <button type='button' class="bton" onClick={(e)=>tapecar(e)} value={3} >3</button>
        <button type='button' class="bton l" onClick={(e)=>tapecar(e)} value={'+'} >+</button>
      </div>
      <div class="cal-btn-row">
        <button type='button' class="bton" onClick={(e)=>tapecar(e)} value={'.'} >.</button>
        <button type='button' class="bton" onClick={(e)=>tapecar(e)} value={0} >0</button>
        <button  type='button' class="bton" value={'%'} onClick={mod}>
          %</button>
            <button type='button' class="bton l" onClick={resultat} >=</button>
        </div>
      </div>
    </div>
  )
}
