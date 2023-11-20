import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./axios.css" 


export default function Comp9_useEffeect_Tableau() {
    const [st1,setst1]=useState([])
    const [page,setpage]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos?_limite=10&_page=${page}`)
        .then(res=>setst1(res.data))
        .catch((error)=>console.log(error))
    },[page])
  


    const suivant=()=>{
     if(page<20){
        setpage(page+1)
    }
     }
     const presedant=()=>{
        if(page>1){
      setpage(page-1)
    }
     }
  return (
    
    <div className='txt'>
        <h1   >liste des element </h1>
      <ul>
       {st1.map((x)=>(
         <li>{x.title}</li>
       ))}
      </ul>

      <input type="button" className='btn btn-primary'  onClick={presedant} value="presedant"/>
      <input type="button" className='btn btn-primary'   onClick={suivant} value="suivant"/>
     
    </div>
  )
}
