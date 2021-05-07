import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({ title }) => {
    return (
       <header className='header'> 
           <h2>{title}</h2>
           <Button color='green' text='Add'/>
            <Button color='red' text='Wow' />
            <Button color='black' text='ReUsable Components' text_color='red' />
       </header>
    )
}
Header.defaultProps = {
    title: 'Romulon App'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//css in js
/* const headingStyle ={
    color: 'red', backgroundColor: 'black'
} */
export default Header
