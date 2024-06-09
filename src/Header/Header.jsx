// import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <h1>Navber</h1>
            <Link to={"/"}>Home</Link>
            {/* <a href="./">Home</a> */}
            <Link to={"./about"}>about</Link>
            {/* <a href="./about">about</a> */}
            <Link to={"./users"}>Users</Link>
            {/* <a href="./userid">Users</a> */}
            <Link to={"./contact"}>contact</Link>
            {/* <a href="./contact">contact</a> */}
        </div>
    );
};

export default Header;