import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/Auth/Login';
import Register from '../../pages/Auth/Register';
import ResetPassword from '../../pages/Auth/ResetPassword';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
    );
};

export default AuthRoutes;