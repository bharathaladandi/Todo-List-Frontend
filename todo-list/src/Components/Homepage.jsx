import React, { useState } from 'react';
import './Style.css'

export const HomePage = () => {
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);
    const [error, setError] = useState("");


    const handlechange = (e) => {
        setTask(e.target.value)
        setError("")
    }

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            setTodo([...todo, task]);
            setTask("");
        } else {
            setError('Task cannot be empty!');
          }
    }

    const handleDelete = (index) => {
        const deleteTodo = todo.filter(( _ , i) => i !== index);
        setTodo(deleteTodo);
      };

    return (
        <div>
            <div>
                <h1>Todo List</h1>
                <input className='inputsty' type="text"
                    placeholder='Add Name'
                    value={task}
                    onChange={handlechange} />
                <button className='addbtn' onClick={handleAddTodo}>ADD</button>
            </div>
            {error && <p className="error">{error}</p>}
            <div>
                {todo.length === 0 ? (
                    <div className='fonttdo'>No Tasks Added Yet!</div>
                )
                    :
                    (
                        <ul>
                            {todo.map((todo, id) => (
                                <div key={id} className='card'>
                                    <p>{todo}</p>
                                    <button onClick={() => handleDelete(id)}>Remove</button>
                                </div>
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )

}