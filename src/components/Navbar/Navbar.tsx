// Navbar.js
import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import { getPublicURL } from '../../utils/getPublicURL';

const Navbar = () => (
    <>
        <div className="logoContainer">
            <img src={require('../../imgs/logo.png')} alt="Logo" />
        </div>
        <div className="nav">
            <nav>
                <ul>
                    <li >
                        <NavLink to={`${getPublicURL()}/`} className={({isActive}) => isActive ? "active": ""}>Home</NavLink>
                    </li>
                    <li className="active">
                        <NavLink to={`${getPublicURL()}/relation-schemas`} className={({isActive}) => isActive ? "active": ""}>Relatie schemas</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
);

export default Navbar;
