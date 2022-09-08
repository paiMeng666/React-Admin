import React, { useState, useEffect } from "react";
import { message, Popconfirm } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import memoryUtils from "../../pages/untils/memoryUtils";
import storgeUntils from "../../pages/untils/storgeUntils";
import "./index.scss";
let timer = null;
export default function Header() {
  useEffect(() => {
    getDate();
  }, []);
  useEffect(()=>{
      return ()=>{
        clearInterval(timer)
      }
  },[])
  const { userName } = memoryUtils.user;
  const [date, setDate] = useState(
    moment(Date.now()).format("YYYY-MM-DD hh:mm:ss")
  );
  const navigate = useNavigate();
  const getDate = () => {
    timer = setInterval(() => {
      setDate(moment(Date.now()).format("YYYY-MM-DD hh:mm:ss"));
    }, 1000);
  };
  const confirm = (e) => {
    storgeUntils.deleteUser();
    memoryUtils.user = {};
    navigate("/login");
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div className="header">
      <div className="header-top">
        <span>欢迎</span>
        <span className="user-name">{userName}</span>
        <Popconfirm
          title="确认退出吗？"
          onConfirm={confirm}
          onCancel={cancel}
          okText="是"
          cancelText="否"
        >
          <a href="#">退出</a>
        </Popconfirm>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left">首页</div>
        <div className="header-bottom-right">
          <span className="date">{date}</span>
          <span className="weather">晴</span>
        </div>
      </div>
    </div>
  );
}
