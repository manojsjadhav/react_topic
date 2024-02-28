import React, { useContext } from "react";
import {countContaxt} from "./Contextapi";

const Counter = () => {
const  {count, setCount} = useContext(countContaxt);

  return <div>
    <h1>counter</h1>
    <button onClick={()=>setCount(count-1)}>dic</button>
    <span style={{padding:"1rem"}}>{count}</span>
    <button onClick={()=>setCount(count+1)}>inc</button>
  </div>;
};

export default Counter;
