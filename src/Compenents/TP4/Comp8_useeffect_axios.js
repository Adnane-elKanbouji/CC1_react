import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./axios.css"

export default function Comp8_useeffect_axios() {
    const [st1,setst1]=useState("")
    useEffect(()=>{
     axios.get('https://api.thecatapi.com/v1/images/search').then(res=>{setst1(res.data[0].url)}).catch(error=>{console.log(error)})
    },[])
  return (
    <div>
       
      <img className='img-chat' src={st1}  alt="" />
    </div>
  )
}
