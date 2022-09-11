import ajax from "./ajax";
/**登录 */
export const reqLogin = (username, password) => {
  return ajax("test/login", { username, password }, "POST");
};

/**获取分类的列表 */
export  const  reqCategorys = (parentId)=>{
  return ajax('manage/category/list',{parentId},'POST')
}

/**添加分类 */
export  const  reqAddCategorys = (data)=>{
  return ajax('manage/category/add',data,"POST")
}


/**更新分类 */
