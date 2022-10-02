import ajax from "./ajax";
/**登录 */
export const reqLogin = (username, password) => {
  return ajax("test/login", { username, password }, "POST");
};

/**获取分类的列表 */
export const reqCategorys = (parentId) => {
  return ajax("manage/category/list", { parentId }, "POST");
};

/**添加分类 */
export const reqAddCategorys = (data = {}) => {
  return ajax("manage/category/add", data, "POST");
};

/**获取商品分页列表 */
export const reqProductList = (data = {}) => {
  return ajax("manage/product/list", data);
};

/**获取分类名称 */
export const reqCategoryName = (data = {}) => {
  return ajax("/manage/category/info", data);
};

/**删除图片 */

export const reqDeleteImg = (name) => {
  return ajax("/manage/image/delete", { name }, "POST");
};
