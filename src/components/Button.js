import React from 'react'

const Button = ({color, text, text_color}) => {
    return (
        <button 
            style={{
                backgroundColor: color, 
                color: text_color
            }}
        className='btn'>
            {text}
        </button>
    )
}

export default Button
