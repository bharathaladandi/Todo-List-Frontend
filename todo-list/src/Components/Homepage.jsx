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

    const handleDelete = (index) => {
        const deleteTodo = todo.filter(( _ , i) => i !== index);
        setTodo(deleteTodo);
      };

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
                            {todo.map((todo, id) => (
                                <div key={id}>
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