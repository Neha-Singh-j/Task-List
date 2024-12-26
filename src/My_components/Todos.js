import React from 'react'
import Todoitem from "./Todoitem"
const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
margin:"10px auto"
  }
  return (
    <div className="container" style={myStyle} >
    
      <h2 className='new-amsterdam-regular my-3 text-light '>Todos List</h2>
      {props.todos.length===0 ? "no todos to display":
      props.todos.map((todo)=>{
        return(
          <>
           <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
             <hr/>
        </>
        )
        // this below return also works but its better to use when you have to return more than one thing
      //   return (
      //   <>
      // <h3>Checkiing</h3>
      //   <Todoitem todo={todo}/>
      //   </>)
      })
    }

      {/* <Todoitem todo={props.todos[1]}/> */}

    </div>
  )
}

export default Todos
