import React, { useState } from "react";

const Addtodo = (props) => {
    const[title,setTitle]=useState("");
    const[discription,setDiscription]=useState("");
    const submit=(e)=>{
e.preventDefault();
if(!title || !discription){
    alert("Title or Discription can not be empty");
}else{
props.addtodo(title,discription);
setTitle(""); 
setDiscription("");
}

    }
  return (
    <div className="container my-3">
      <h2 className='new-amsterdam-regular text-light my-3 '>Add a Todo</h2>
     

      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-light">
            Todo Title
          </label>
          <input
            type="text" value={title} onChange={
                (e)=>{setTitle(e.target.value)}
            }
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="discription" className="form-label text-light">
           Discription
          </label>
          <input
            type="text" value={discription} onChange={(e)=>{setDiscription(e.target.value)}}
            className="form-control"
            id="discription"
          />
        </div>
       
        <button type="submit" className="btn btn-sm btn-success text-light">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
