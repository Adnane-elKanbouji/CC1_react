import React from 'react';

export default function Task({delf,txt,Completed,toggle}) {
  const styletext={
  
    textDecoration:  Completed? "line-through": "none",
   
  }
  
  return (
 <div className="container-fluid">
    <div class="row" >
 <div className="col-9"> <input type="text" style={styletext}  onClick={toggle} readOnly class=" form-control"  value={txt} /></div>
 <div className="col-3"> <input type="button" onClick={delf} class="btn btn-danger " value={"Supprimer"} /></div > 
  <br /><br />
    </div>
    </div>
  )
}
