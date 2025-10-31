import React, { useState } from 'react';
import axiosInstance from '../../config/axios';

const ChangePasswordDemo = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (!oldPassword || !newPassword || !confirmPassword) {
            setMessage('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await axiosInstance.post('/auth/change-password', {
                oldPassword,
                newPassword,
                confirmPassword
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMessage(response.data.message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Lỗi máy chủ');
            }
        }
        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Đổi mật khẩu (Demo)</h2>
            <div className="mb-6 text-center text-gray-700">
                <p>Bạn đã đăng nhập thành công!</p>
                <p>Đây là trang cho phép bạn đổi mật khẩu.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="oldPassword">Mật khẩu cũ</label>
                    <input
                        type="password"
                        id="oldPassword"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        className="w-full border px-2 py-1 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="newPassword">Mật khẩu mới</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        className="w-full border px-2 py-1 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        className="w-full border px-2 py-1 rounded"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded" disabled={loading}>
                    {loading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
                </button>
            </form>
            {message && <div className="mt-4 text-center text-red-600">{message}</div>}
        </div>
    );
};

export default ChangePasswordDemo;
