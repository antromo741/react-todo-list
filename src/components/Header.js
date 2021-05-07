import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({ title }) => {
    return (
       <header className='header'> 
           <h2>{title}</h2>
           <Button/>
           
            <Button color='black' text='add' text_color='red' />
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
