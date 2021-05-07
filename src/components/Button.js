import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, text_color, onClick}) => {
   
   
    return (
        <button 
            onClick={onClick}
            style={{
                backgroundColor: color, 
                color: text_color
            }}
        className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'royalblue',
    text_color: 'white',
    text: 'Add',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
