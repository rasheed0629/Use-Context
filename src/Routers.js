// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import Dashboard from './Dashboard';
import AddProfile from './AddProfile';

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard/>} ></Route>
      <Route path="/profile" element={<UserProfile/>} />
      <Route path="/add" element={<AddProfile/>} />
      <Route path="/edit/:userId" element={<EditProfile/>}/>
   </Routes>
  );
};

export default Routers;
