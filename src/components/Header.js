import PropTypes from 'prop-types'



const Header = ({ title }) => {
    return (
       <header> 
           <h1 style={headingStyle}>Header component</h1>
           <h2>{title}</h2>
       </header>
    )
}
Header.defaultProps = {
    title: 'hunterxhunter'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle ={
    color: 'red', backgroundColor: 'black'
}
export default Header
