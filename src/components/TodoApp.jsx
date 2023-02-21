import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../routes/About';
import Home from '../routes/Home';
import Login from '../routes/Login';
import NotMatch from '../routes/NotMatch';
import Profile from '../routes/Profile';
import Layout from './Layout';

export default function TodoApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}
