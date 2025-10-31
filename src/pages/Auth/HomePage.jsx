import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Đã đăng xuất!');
        navigate('/auth/login');
    };

    const handleChangePassword = () => {
        navigate('/auth/change-password-demo');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow text-center">
            <h2 className="text-2xl font-bold mb-4">Bạn đã đăng nhập thành công!</h2>
            <p className="mb-6">Đây là trang chủ demo. Bạn có thể thực hiện các chức năng bên dưới:</p>
            <div className="space-x-4">
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded"
                    onClick={handleLogout}
                >
                    Đăng xuất
                </button>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleChangePassword}
                >
                    Đổi mật khẩu
                </button>
            </div>
        </div>
    );
};

export default HomePage;
