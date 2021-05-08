import React from 'react'
import Task from './Task.js'
//Figuring out the limits of the parent component
const Tasks = ({ tasks, onDelete}) => {
   
    return (
        <>
       
        {tasks.map((task) =>(
            <div>
            <Task key={task.id} task={task} onDelete={onDelete} />
            </div>
        ))}
       
        </>
    )
} 


export default Tasks
