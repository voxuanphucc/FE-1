// Auth type definitions


/**
 * @typedef {Object} RegisterRequest
 * @property {string} fullName
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} LoginRequest
 * @property {string} email
 * @property {string} password
 * @property {boolean} [remember]
 */

/**
 * @typedef {Object} LogoutRequest
 * @property {string} token - JWT token nhận được khi đăng nhập
 */

/**
 * @typedef {Object} ForgotPasswordRequest
 * @property {string} email
 */

/**
 * @typedef {Object} ResetPasswordRequest
 * @property {string} token
 * @property {string} newPassword
 */

// Lưu ý: Đăng xuất với JWT chỉ cần FE xóa token khỏi localStorage/cookie

