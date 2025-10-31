import React, { useState } from 'react';

const ForgotPasswordForm = ({ onForgot }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onForgot && onForgot(email);
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
            <button type="submit" className="w-full bg-yellow-600 text-white py-2 rounded">Gửi yêu cầu</button>
        </form>
    );
};

export default ForgotPasswordForm;
