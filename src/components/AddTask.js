import React from 'react'
import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
       <form className='add-form'>
           <div className='form-control'>
               <label>Add a task</label>
               <input type='text' 
               placeholder='add a task' 
               value={text}
               onChange={(e) => 
            setText(e.target.value)}
               />
            </div> 
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' 
                placeholder='Day and Time' 
                value={day}
                onChange={(e) =>
                    setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                value={reminder}
                onChange={(e) =>
                    setReminder(e.currentTarget.checked)} 
                />
            </div>
            <input type='submit' value='Save Task'
            className='btn btn-block'/>
           </form>
    )
}

export default AddTask