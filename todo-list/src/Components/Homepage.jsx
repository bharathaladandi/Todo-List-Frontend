import React, { useState } from 'react';

export const HomePage = () => {
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);


    const handleAddTodo = () => {
        if (task.trim() !== '') {
            setTodo([...todo, task]);
            setTask("");
        }
    }

    return (
        <div>
            <div>
                <h1>Todo List</h1>
                <input type="text"
                    placeholder='Add Name'
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <button onClick={handleAddTodo}>ADD</button>
            </div>
            <div>
                {todo.length === 0 ? (
                    <div>No Tasks Added Yet!</div>
                )
                    :
                    (
                        <ul>
                            {todo.map((task, i) => (
                                <div key={i}>
                                    <p>{task}</p>
                                    <button>Remove</button>
                                </div>
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )

}