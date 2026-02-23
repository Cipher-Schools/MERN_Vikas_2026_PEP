import React, { useState } from 'react'

function ToDo() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if(task.trim() === '') return;

        setTasks([...tasks, {id: Date.now(), text: task}]);
        setTask("");
    }
    
  return (
    <div style={{textAlign: "center", marginTop:"100px"}}>
        <h2>To Do App</h2>
        <input value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter task'
        />
                                       
        <button onClick={addTask}>Add</button>
        {tasks.map((t)=> (
            <p key={t.id}>{t.text}</p>
        ))}

    </div>
  )
}

export default ToDo