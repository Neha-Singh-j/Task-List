
 import './App.css';
import Header from './My_components/Header';
import Todos from './My_components/Todos';
import Footer from './My_components/Footer';
import React,{useEffect, useState } from 'react';
import Addtodo from './My_components/Addtodo';
function App() {
  let initTodo;
if(localStorage.getItem("todos")===null){
  initTodo=[];

}else{
  initTodo=JSON.parse(localStorage.getItem("todos"));
}

  const addtodo=(title,discription)=>{
    // console.log("here its your new todo task")
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
       sno=todos[todos.length-1].sno+1;
    }

    const myTodo={
      sno:sno,
      title:title,
      discription:discription
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);

  };
  const [todos,setTodos]=useState([initTodo]);
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  const onDelete=(todo)=>{
    console.log("i am ondelete of todo");
    setTodos(todos.filter((e)=>{
    return e!==todo;
    }))
    localStorage.getItem("todos");
  };
 

  return (
    <>
    <Header title="Todos List" searchbar={false}/>
    <Addtodo addtodo={addtodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;












// {
    //   sno:1,
    //   title:"Go to the market",
    //   discription:"You need to buuy some grocerry"
    // },
    // {
    //   sno:2,
    //   title:"Compllete Assignment",
    //   discription:"You need to complete assignment before due date"
    // },
    // {
    //   sno:3,
    //   title:"Go to college",
    //   discription:"You need to buuy some grocerry"
    // }