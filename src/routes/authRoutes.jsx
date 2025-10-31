import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Profile from '../pages/Auth/Profile';
import ChangePasswordDemo from '../pages/Auth/ChangePasswordDemo';
import HomePage from '../pages/Auth/HomePage';

const authRoutes = [
    <Route path="/auth/login" element={<Login />} key="login" />,
    <Route path="/auth/register" element={<Register />} key="register" />,
    <Route path="/auth/forgot-password" element={<ForgotPassword />} key="forgot" />,
    <Route path="/auth/profile" element={<Profile />} key="profile" />,
    <Route path="/auth/change-password-demo" element={<ChangePasswordDemo />} key="change-password-demo" />,
    <Route path="/home" element={<HomePage />} key="home" />,
];

export default authRoutes;
