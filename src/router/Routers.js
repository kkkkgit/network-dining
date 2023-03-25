import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './../pages/Home';
import Events from './../pages/Events';
import EventDetails from './../pages/EventDetails';


const Routers = () => {
    return 
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/event' element={<Events/>} />
        <Route path='/event/:id' element={<EventDetails/>} />
    </Routes>
};

export default Routers;