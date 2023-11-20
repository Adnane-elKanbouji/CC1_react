import React from 'react'
import {Link} from 'react-router-dom'

import "./NavBar.css"
export default function NavBar() {
  return (
    <div className='body' >
      <nav>
      
      <li><Link className='lin' to='/'>ACCEIL</Link></li>
      <li> <Link className='lin' to='/Tp1'>TP1</Link></li>
        <li> <Link className='lin' to='/Tp2'>TP2</Link></li>
        <li><Link className='lin' to='/Tp3'>TP3</Link></li>
        <li><Link className='lin' to='/Tp4'>TP4</Link></li>
       
        </nav>
    </div>
    
   
  )
}
