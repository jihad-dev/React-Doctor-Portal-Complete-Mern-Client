import React from 'react';
import Navbar from '../Pages/Shered/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shered/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;