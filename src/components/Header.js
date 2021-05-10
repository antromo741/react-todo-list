import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
   const location = useLocation()
 
    return (
       <header className='header'> 
           <h2>{title}</h2>
           
           {location.pathname === '/' && (
           <Button 
           color={showAdd ? 'red' : 'green'}
           text={showAdd ? 'Close' : 'Add'}
           onClick={onAdd}
           />
           )} 

            {location.pathname === '/' && (<Button onClick={onAdd} color='black' text='add' text_color='red' />
            )}
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
