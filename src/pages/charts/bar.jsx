import React, { useState, useRef } from "react";
// 引入store
import store from '../../redux/store'
import {createIncrement,createDecrement} from '../../redux/count_action'

export default function Bar() {
  const [count, setCount] = useState(0);
  const select = useRef(null);

  const increment = () => {
    const { value } = select.current;
    store.dispatch(createIncrement(value*1))
  };
  const decrement = () => {
    const { value } = select.current;
    store.dispatch(createDecrement(value*1))
  };
  const incrementIfOdd = () => {
    const { value } = select.current;
    if(count % 2 !==0){
      setCount(count + Number(value));
    }
  };
  const incrementAsync = () => {
    const { value } = select.current;
    setTimeout(()=>{
      setCount(count + Number(value));
    },1000)
  };
  return (
    <div>
      <h1>当前求和为:{store.getState()}</h1>
      <select ref={select}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementIfOdd}>奇数相加</button>
      <button onClick={incrementAsync}>异步相加</button>
    </div>
  );
}
