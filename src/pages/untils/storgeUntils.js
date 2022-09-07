/**数据存储管理 */
const User = "user";
export default {
  /**保存User */
  saveUser(user) {
    localStorage.setItem(User, JSON.stringify(user));
  },
  /**读取User */
  getUser() {
    return JSON.parse(localStorage.getItem(User) || "{}");
  },
  /**删除User */
  deleteUser() {
    localStorage.removeItem(User);
  },
};
