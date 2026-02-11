import React, { useEffect, useState } from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'
import './style.css'

export default function App() {

  // array creating
  const [tasks, setTasks] = useState([]);

  //it is called automatically when component will be rendered only one time
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task)=>{
    //(spread operator = ...)
    setTasks([...tasks, task])
  }
  const updateTask = (updatedTask, index)=>{
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index)=>{
    setTasks(tasks.filter((_, i) => i !=index))
  }
  const clearTasks = () =>{
    setTasks([]);
  }
  return (
    <div className='App'>
      {/* rendering components */}
      <header>
        <h1 className='title'> TaskAssembler</h1>
        <p className='tagline'>Your Daily Task Manager</p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks} />

      {tasks.length>0 && (<button className='clear-btn'
      onClick={clearTasks}>Clear All Tasks</button> )}
 
    </div>
  )
}
