import { Link } from 'react-router-dom';

function NavLinks() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/coming-soon">About</Link></li>
            <li><Link to="/coming-soon">Menu</Link></li>
            <li><Link to="/book">Reservations</Link></li>
            <li><Link to="/coming-soon">Order Online</Link></li>
            <li><Link to="/coming-soon">Login</Link></li>
        </ul>
    );
};

export default NavLinks;