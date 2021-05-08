import React from 'react'

//Figuring out the limits of the parent component
const Tasks = ({ tasks }) => {
   
    
    
    return (
        <>
       
        {tasks.map((task) =>(
            <div>
                <h3 key={task.id}>{task.text} </h3>
                <h2>{task.day}</h2>
                
            
            </div>
            
        ))}
       
        </>
    )
} 


export default Tasks
