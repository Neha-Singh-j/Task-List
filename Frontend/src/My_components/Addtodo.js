import React, { useState } from "react";

const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("2"); // Default to normal priority (2)

    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title and Description cannot be empty");
        } else {
            props.addtodo(title, description, dueDate, priority);
            setTitle("");
            setDescription("");
            setDueDate("");
            setPriority("2"); // Reset to default after submission
        }
    };

    return (
        <div className="container my-3">
            <h2 className='new-amsterdam-regular text-light my-3'>Add a Todo</h2>
            
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label text-light">
                        Todo Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="title"
                        aria-describedby="titleHelp"
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="description" className="form-label text-light">
                        Description
                    </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        id="description"
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label text-light">
                        Due Date (Optional)
                    </label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="form-control"
                        id="dueDate"
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label text-light">
                        Priority
                    </label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="form-select"
                        id="priority"
                    >
                        <option value="1">High (1)</option>
                        <option value="2">Normal (2)</option>
                        <option value="3">Low (3)</option>
                        <option value="4">Very Low (4)</option>
                    </select>
                </div>
                
                <button type="submit" className="btn btn-sm btn-success text-light">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default Addtodo;