// auth.regression.test.js
const { login } = require('./auth');

describe('Regression Test - Login Edge Cases', () => {
  test('Mật khẩu sai trả về false', () => {
    expect(login('admin', 'wrongpassword')).toBe(false);
  });

  test('Username rỗng trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Password rỗng trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Username và password đều rỗng trả về false', () => {
    expect(login('', '')).toBe(false);
  });

  test('Mật khẩu chứa ký tự đặc biệt trả về false', () => {
    expect(login('admin', '!@#$%^&*()')).toBe(false);
  });

  test('Tài khoản bị khóa trả về false dù đúng mật khẩu', () => {
    expect(login('locked_user', '123')).toBe(false);
  });

  test('Username đúng nhưng không tồn tại trong hệ thống trả về false', () => {
    expect(login('unknown_user', '123')).toBe(false);
  });

  test('Đăng nhập đúng (admin/123) vẫn trả về true (kiểm tra không phá vỡ case đúng)', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
