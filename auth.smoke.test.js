// auth.smoke.test.js
const { login } = require('./auth');

describe('Smoke Test - Core Login Function', () => {
  test('Đăng nhập đúng (admin/123) trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
