
const Header = ({ title }) => {
    return (
       <header> 
           <h1>Header component</h1>
           <h2>{title}</h2>
       </header>
    )
}
Header.defaultProps = {
    title: 'hunterxHunter'
}
export default Header
