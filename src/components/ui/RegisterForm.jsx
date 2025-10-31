
import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Mật khẩu xác nhận không khớp!');
            return;
        }
        onRegister && onRegister({ fullName, email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="fullName">Họ và tên</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Mật khẩu</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                    required
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Đăng ký</button>
        </form>
    );
};

export default RegisterForm;
