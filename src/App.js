
import './App.css';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    'Buy shopping',
    'Clean bathroom',
    'Car\'s MOT'
  ])

  const [newTask, setNewTask] = useState('');

  const itemNodes = tasks.map((task, index) => {
    return (
      <li key={index}><span>{task}</span></li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);
    setNewTask('');
  }

  return (
    <>
      <div className="App">
        <h1>ToDo List</h1>

        <form onSubmit={saveNewTask}>

          <input id='new-task' type='text' value={newTask} onChange={handleTaskInput} />
          <input type='radio' id='high' name='high' value='high'></input>
          <input type='radio' id='low' name='low' value='low'></input>
          <input type='submit' value='save new task' />
        </form>

        <ul>
          {itemNodes}
        </ul>
      </div>
    </>
  );
}

export default App;
