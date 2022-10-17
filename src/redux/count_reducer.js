/**
 * 1.该文件用于创建一个Count组件服务的reducer,reducer的本质就是一个函数
 * 2.reducer函数会接收到两个参数,分别为之前的状态(state),动作对象(action)
 */

 import {DECREMENT,INCREMENT} from './constant'

 export default function countReducer(state = 0, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return state + data;
      break;
    case DECREMENT:
      return state - data;
      break;
    default:
      return 0;
      break;
  }
}
