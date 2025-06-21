import React from 'react';
import Todoitem from "./Todoitem";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className='new-amsterdam-regular my-3 text-light'>Todos List</h2>

      {props.todos.length === 0 ? (
        <p className="text-muted">No todos to display</p>
      ) : (
        props.todos.map((todo) => {
          // ✅ Skip invalid entries
          if (!todo || !todo.title) return null;

          return (
            <React.Fragment key={todo.sno}>
              <Todoitem todo={todo} onDelete={props.onDelete} />
              <hr />
            </React.Fragment>
          );
        })
      )}
    </div>
  );
};

export default Todos;
