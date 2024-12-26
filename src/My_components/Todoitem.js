import React from 'react'

const Todoitem = ({todo,onDelete}) => {
  // {todo,onDelete} this is destrucutring....we can also write props here....then we can use props.onDeleete
  let myStyle = {
    backgroundColor: "rgb(232, 211, 106)", // corrected to camelCase
    border: "1px solidrgb(22, 119, 216)",
    borderRadius: "8px", // 
    padding: "15px",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", 
    transition: "transform 0.2s ease",

  };
  
  
  return (
    <div className='container' style={myStyle} >
      <h3 className="font-kanit">{todo.title}</h3>
      <p className='desc'>{todo.discription}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todoitem