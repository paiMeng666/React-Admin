/**
 * 该文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from "./constant";
import store from "./store";

/**同步action,action为对象*/
export function createIncrement(data) {
  return { type: INCREMENT, data };
}

export function createDecrement(data) {
  return { type: DECREMENT, data };
}
/** 异步action ,action为函数 */
export function createAsyncIncrement(data, time) {
  return () => {
    setTimeout(()=>{
        store.dispatch(createIncrement(data))
    },time)
  };
}
