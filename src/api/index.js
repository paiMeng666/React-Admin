import ajax from "./ajax";

export const reqLogin = (username, password) => {
  return ajax("test/login", { username, password }, "POST");
};
