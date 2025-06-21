import './App.css';
import Header from './My_components/Header';
import Todos from './My_components/Todos';
import Footer from './My_components/Footer';
import React, { useEffect, useState } from 'react';
import Addtodo from './My_components/Addtodo';

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);  // ✅ FIXED

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addtodo = (title, discription) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      discription: discription
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const onDelete = (todo) => {
    console.log("I am onDelete of todo");
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  return (
    <>
      <Header title="Todos List" searchbar={false} />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
