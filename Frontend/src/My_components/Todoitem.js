import React from 'react';

const Todoitem = ({ todo, onDelete }) => {
  // Style object (keeping your existing styles)
  let myStyle = {
    backgroundColor: "rgb(232, 211, 106)",
    border: "1px solid rgb(22, 119, 216)",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.2s ease",
  };

  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "No deadline";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to get priority info
  const getPriorityInfo = (priority) => {
    switch(priority) {
      case '1': return { label: 'High', class: 'danger' };
      case '2': return { label: 'Normal', class: 'primary' };
      case '3': return { label: 'Low', class: 'warning' };
      case '4': return { label: 'Very Low', class: 'secondary' };
      default: return { label: 'Normal', class: 'primary' };
    }
  };

  const priorityInfo = getPriorityInfo(todo.priority);

  return (
    <div className='container' style={myStyle}>
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h3 className="font-kanit">{todo.title}</h3>
          {/* Fixed spelling from discription to description */}
          {todo.description && (
            <p className='desc mt-2' style={{ color: '#333' }}>
              {todo.description}
            </p>
          )}
        </div>
        <button 
          className='btn btn-sm btn-danger' 
          onClick={() => onDelete(todo)}
          style={{ flexShrink: 0 }}
        >
          Delete
        </button>
      </div>

      {/* Metadata section */}
      <div className="mt-3 d-flex justify-content-between align-items-center">
        {/* Due Date */}
        <span className={`badge bg-${todo.dueDate ? 'info' : 'secondary'}`}>
          <i className="bi bi-calendar me-1"></i>
          {formatDate(todo.dueDate)}
        </span>

        {/* Priority */}
        <span className={`badge bg-${priorityInfo.class} ms-2`}>
          <i className="bi bi-flag me-1"></i>
          {priorityInfo.label}
        </span>

        {/* AI Generated badge if applicable */}
        {todo.isAI && (
          <span className="badge bg-light text-dark ms-2">
            <i className="bi bi-robot me-1"></i>
            AI Generated
          </span>
        )}
      </div>
    </div>
  );
};

export default Todoitem;