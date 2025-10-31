import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../services/authService';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token') || '';
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (!token || !newPassword) {
            setMessage('Thiếu token hoặc mật khẩu mới');
            return;
        }
        setLoading(true);
        try {
            const result = await resetPassword(token, newPassword);
            if (result.success) {
                setMessage('Đặt lại mật khẩu thành công');
            } else {
                setMessage('Token không hợp lệ hoặc đã hết hạn');
            }
        } catch (error) {
            setMessage('Lỗi máy chủ');
        }
        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Đặt lại mật khẩu</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded" disabled={loading}>
                    {loading ? 'Đang xử lý...' : 'Đặt lại mật khẩu'}
                </button>
            </form>
            {message && (
                <div className={message === 'Đặt lại mật khẩu thành công' ? 'mt-4 text-center text-green-600' : 'mt-4 text-center text-red-600'}>
                    {message}
                </div>
            )}
            <div className="mt-4 text-center">
                <a href="/auth/login" className="text-blue-500">Quay lại đăng nhập</a>
            </div>
        </div>
    );
};

export default ResetPassword;
