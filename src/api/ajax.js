import axios from "axios";
import { message } from "antd";
const myAxios = axios.create({
  timeout: 3000,
});

export default function ajax(url, data ={}, method = "GET") {
  return new Promise((resolve, reject) => {
    if (method === "GET") {
      myAxios
        .get(url, {
          params: data,
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          message.error("请求出错了: " + err);
        });
    } else {
      myAxios
        .post(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          message.error("请求出错了: " + err);
        });
    }
  });
}
