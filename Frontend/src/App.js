import './App.css';
import Header from './My_components/Header';
import Todos from './My_components/Todos';
import Footer from './My_components/Footer';
import React, { useEffect, useState } from 'react';
import Addtodo from './My_components/Addtodo';
import AIAssistant from './My_components/AIAssisant';

function App() {
  // Initialize todos from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add todo function with all fields
  const addtodo = (title, description = "", dueDate = "", priority = "2", isAI = false) => {
    const newTodo = {
      sno: todos.length > 0 ? todos[todos.length - 1].sno + 1 : 0,
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      isAI: isAI,
      completed: false // Added completed status
    };
    setTodos([...todos, newTodo]);
  };

  // Handle AI tasks with validation
  const handleAITask = (aiTask) => {
    if (!aiTask) {
      console.error("AI task is undefined");
      return;
    }
    
    addtodo(
      aiTask.title || "AI Generated Task",
      aiTask.description || `Created from AI: ${aiTask.input || ''}`,
      aiTask.dueDate || "",
      aiTask.priority || "2",
      true
    );
  };

  // Delete todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  return (
    <div className="app-container">
      <Header title="Todos List" searchbar={false} />
      <div className="content-container">
        <Addtodo addtodo={addtodo} />
        <AIAssistant onAddTask={handleAITask} />
        <Todos todos={todos} onDelete={onDelete} />
      </div>
      <Footer />
    </div>
  );
}

export default App;