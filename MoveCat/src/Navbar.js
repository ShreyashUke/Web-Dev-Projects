import { Link } from "react-router-dom";
import logo from './image/MainLogo.png'



const Navbar = () => {
    
    return ( 
        <nav className="navbar">
            {/* <h1>Logo</h1> */}
            <img src={logo} alt="" />
            <div className="links">
                <Link to="/">Sign in</Link>
                <Link to="/create">Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
