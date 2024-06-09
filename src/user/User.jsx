// import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'
const User = ({user}) => {
    // console.log(user);
    const {name,email,username,id}=user;
    return (
        <div className="user">
            <h2>{name}</h2>
            <p>{email}</p>
            <h3>{username}</h3>
            <Link to={`/user/${id}`}>Details</Link>
        </div>
    );
};

export default User;