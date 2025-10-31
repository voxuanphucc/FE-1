// Auth service (axios/fetch)
import axiosInstance from '../config/axios';

/**
 * Đặt lại mật khẩu với token và mật khẩu mới
 * @param {string} token
 * @param {string} newPassword
 * @returns {Promise<{message: string}>}
 */
export async function resetPassword(token, newPassword) {
    const response = await axiosInstance.post('/auth/reset-password', { token, newPassword });
    return response.data;
}
