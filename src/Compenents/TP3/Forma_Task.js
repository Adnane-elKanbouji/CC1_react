import React, { useState } from 'react'
import Task from './Task';
import {v4 as uuidv4} from "uuid";
import  "bootstrap/dist/css/bootstrap.min.css";


export default function Forma_Task() {
    const [Tsk,setTsk]=useState([
        {id:uuidv4(),txt:"Sport",Completed:false},
        {id:uuidv4(),txt:"Film",Completed:false},
        {id:uuidv4(),txt:"coding react",Completed:false}
    ])

    const [task1,setTask1]=useState("");

   const addTask=()=>{
    const Ntasks=[...Tsk];
    const Ntask={};
    Ntask.id=uuidv4();
    Ntask.txt=task1;
    Ntask.Completed=false;
    Ntasks.push(Ntask);
    setTsk(Ntasks);
   }

const deleteTask=(idp)=>{
  let Ntask=Tsk.filter((T)=>{
    return T.id != idp
  })
  setTsk(Ntask);
}

const toggleTask=(idp)=>{
  const Ntask=Tsk.map((T)=>{
     if (T.id==idp){
      return {...T, Completed: !T.Completed};
     }
     return T;
  })
  console.log(Ntask)
  setTsk(Ntask)
}


  return (
    <div class="container col-10">
      <center><h1>To do list</h1></center>
      <form class="form-inline">
        Entrer une tache :  <br /> <input  class=" form-control " value={task1}  onChange={(e)=>setTask1(e.target.value)} type="text" /> <br /> 
        <input type="button" class="btn btn-primary btn-sm" onClick={addTask} value={"Ajouter"}/>
      </form>
      <br /><br /><br />
      <ul>
        {Tsk.map((T)=>{
          return <li key={T.id} ><Task delf={(id)=>deleteTask(T.id)} Completed={T.Completed} toggle={(id)=>toggleTask(T.id)} txt={T.txt}/></li>
        })}
        
      </ul>
    </div>
  )
}
