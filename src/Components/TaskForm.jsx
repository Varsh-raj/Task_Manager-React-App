import React from 'react'
import { useState } from 'react'

export default function TaskForm({addTask}) {
    // state variables tostore the user inputs/ selected inputs by user
    const [task, setTask] = useState(' ');
    const [priority, setPriority] =useState("Medium");
    const [category, setCategory] = useState("Genereal");

    const handlesubmit = (e)=>{
        e.preventDefault();
        // to prevent the default regreshing of the page
        addTask({text:task, priority, category, completed: false})

        //reset state:
        setTask('');
        setPriority("Medium")
        setCategory('General')
    }
  return (
    <form onSubmit={handlesubmit} className='task-form'>
        <div id='inp'>
            <input
            type='text'
            placeholder='Enter Your Task' 
            value={task}
            /* to fetch the current value entered by the user (as value will change "onchange" event will be called in background to fetch the value)*/
            // his event will pass the fetched value to the chosen variable ex:- task variable
            onChange={(e)=>setTask(e.target.value)}/> 
            
            <span><button type='submit'>Add Task</button></span>
        </div>

        <div id='btns'>
            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
        </div>

    </form>
  )
}
