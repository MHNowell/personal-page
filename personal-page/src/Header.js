import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const location = useLocation();

    return (
        <header>
            <nav>
                <table class="table-left">
                    <td>
                        <Link to="/" className={location.pathname === "/projects" ? "active" : ""}> Home </Link>
                    </td>
                    <td>
                        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}> Projects </Link>
                    </td>
                </table>
                <h1><Link to="/" className={location.pathname === "/projects" ? "active" : ""}> M. H. Nowell</Link></h1>
                <table class="table-right">
                    <td>
                        <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}> Profile </Link>
                    </td>
                    <td>
                        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}> Contact </Link>
                    </td>
                </table>
            </nav>
            
        </header>
    );
}

export default Header;