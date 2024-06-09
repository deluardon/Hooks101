// import React from 'react';
import './home.css'
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <h2>Home</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;