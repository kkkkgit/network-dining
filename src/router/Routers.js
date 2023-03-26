import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './../pages/Home';
import Events from './../pages/Events';
import EventDetails from './../pages/EventDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Users from "./../pages/Users";
import UserDetails from './../pages/UserDetails';
import EventSearchResultList from "../pages/EventSearchResultList";
import UserSearchResultList from "../pages/UserSearchResultList";


const Routers = () => {
    return ( 
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />

        <Route path="/event/search" element={<EventSearchResultList />} />
        <Route path="/user/search" element={<UserSearchResultList />} />

    </Routes>
    )
};

export default Routers;