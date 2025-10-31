import React from 'react';
import ForgotPasswordForm from '../../components/ui/ForgotPasswordForm';
import axiosInstance from '../../config/axios';

const ForgotPassword = () => {
    const handleForgot = async (email) => {
        try {
            const response = await axiosInstance.post('/auth/forgot-password', { email });
            const result = response.data;
            if (result.success) {
                alert(result.message || 'Đã gửi email khôi phục mật khẩu');
            } else {
                alert(result.message || 'Email không tồn tại');
            }
        } catch (error) {
            alert('Lỗi máy chủ');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Quên mật khẩu</h2>
            <ForgotPasswordForm onForgot={handleForgot} />
            <div className="mt-4 text-center">
                <a href="/auth/login" className="text-blue-500">Quay lại đăng nhập</a>
            </div>
        </div>
    );
};

export default ForgotPassword;
