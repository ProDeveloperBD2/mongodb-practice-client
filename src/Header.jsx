import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/addUser">Add User</Link>
                <Link to="/updateUser">Update User</Link>
            </nav>
    );
};

export default Header;