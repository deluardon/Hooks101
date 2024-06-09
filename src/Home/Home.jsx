// import React from 'react';

import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h2>Home</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;