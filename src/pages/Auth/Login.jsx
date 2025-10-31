import React from 'react';
import LoginForm from '../../components/ui/LoginForm';
import axiosInstance from '../../config/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async (data) => {
        try {
            const response = await axiosInstance.post('/auth/login', data);
            const result = response.data;
            if (response.status === 200 && result.success) {
                alert(result.message || 'Đăng nhập thành công!');
                if (result.token) {
                    localStorage.setItem('token', result.token);
                }
                window.location.href = '/home';
            } else {
                alert(result.message || 'Đăng nhập thất bại!');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert('Lỗi máy chủ');
            }
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow color blue">
            <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>
            <LoginForm onLogin={handleLogin} />
            <div className="mt-4 text-center">
                <span>Bạn chưa có tài khoản? </span>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded underline font-semibold border-none cursor-pointer"
                    style={{ textDecoration: 'underline', color: 'blue' }}
                    onClick={() => navigate('/auth/register')}
                >
                    Đăng ký
                </button>
            </div>

        </div>
    );
};

export default Login;
