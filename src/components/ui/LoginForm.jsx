import React, { useState, useEffect } from 'react';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail') || '';
        const rememberedPassword = localStorage.getItem('rememberedPassword') || '';
        if (rememberedEmail || rememberedPassword) {
            setEmail(rememberedEmail);
            setPassword(rememberedPassword);
            setRemember(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (remember) {
            localStorage.setItem('rememberedEmail', email);
            localStorage.setItem('rememberedPassword', password);
        } else {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
        }
        onLogin && onLogin({ email, password, remember });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex items-center justify-between">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={e => setRemember(e.target.checked)}
                    />
                    <span className="ml-2">Ghi nhớ mật khẩu</span>
                </label>
                <a href="/auth/forgot-password" className="text-blue-500 text-sm">Quên mật khẩu?</a>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Đăng nhập</button>
        </form>
    );
};

export default LoginForm;
