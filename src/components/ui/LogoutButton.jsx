import React from 'react';

const LogoutButton = ({ onLogout }) => {
    const handleLogout = () => {
        // Tích hợp API sau
        localStorage.removeItem('token');
        onLogout && onLogout();
        alert('Đã đăng xuất!');
    };

    return (
        <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
            Đăng xuất
        </button>
    );
};

export default LogoutButton;
