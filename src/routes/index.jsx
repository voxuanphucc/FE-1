import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import HomePage from '../pages/Auth/HomePage';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ChangePasswordDemo from '../pages/Auth/ChangePasswordDemo';
import ResetPassword from '../pages/Auth/ResetPassword';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>this is homepage</h2>
            <button
                style={{ color: 'blue', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', fontSize: '16px' }}
                onClick={() => navigate('/auth/login')}
            >
                Quay lại đăng nhập
            </button>
        </div>
    );
};

const AppRouter = () => (
    <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth/change-password-demo" element={<ChangePasswordDemo />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRouter;
