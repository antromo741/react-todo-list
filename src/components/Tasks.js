import React from 'react'
import Task from './Task.js'
//Figuring out the limits of the parent component
const Tasks = ({ tasks, onDelete, onToggle}) => {
   
    return (
        <>
       
        {tasks.map((task, index) =>(
            <div>
            <Task key={index} 
            task={task} 
            onDelete={onDelete} 
            onToggle={onToggle} />
            </div>
        ))}
       
        </>
    )
} 


export default Tasks
