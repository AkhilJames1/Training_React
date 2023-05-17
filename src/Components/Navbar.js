import { Link } from "react-router-dom";
import "../Styles/main.css"

function Navbar() {
 
    return (
        <header>
            <h3>Logo</h3>
            <nav>
                <Link to="/">Counter</Link>
                <Link to="/modal">Modal</Link>
               
            </nav>
        </header>
    );
}
export default Navbar;