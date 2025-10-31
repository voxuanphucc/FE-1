
import React from 'react';
import RegisterForm from '../../components/ui/RegisterForm';
import axiosInstance from '../../config/axios';

const Register = () => {
    const handleRegister = async (data) => {
        try {
            const response = await axiosInstance.post('/auth/register', data);
            const result = response.data;
            if (response.status === 200 && result.success) {
                alert(result.message || 'Đăng ký thành công!');
            } else {
                alert(result.message || 'Đăng ký thất bại!');
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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Đăng ký</h2>
            <RegisterForm onRegister={handleRegister} />
            <div className="mt-4 text-center">
                <span>Đã có tài khoản? </span>
                <a href="/auth/login" className="text-blue-500">Đăng nhập</a>
            </div>
        </div>
    );
};

export default Register;
