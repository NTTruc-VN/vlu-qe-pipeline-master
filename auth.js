// auth.js
// Thêm nội dung mới 
function login(username, password) {
  const validUsername = "admin";
  const validPassword = "123";
  const lockedUsers = ["locked_user"];

  if (!username || !password) {
    return false;
  }

  if (lockedUsers.includes(username)) {
    return false;
  }

  if (username === validUsername && password === validPassword) {
    return true;
  }

  return false;
}

module.exports = { login };
