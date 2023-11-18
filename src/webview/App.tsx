import React from "react";
export default function App(){
  const [count, setCount] = React.useState(0);
  return <>
    <div className="terminal w-screen h-screen flex justify-center items-center">
      <span className="count">count: {count}</span> <br/>
      <button type="button" className="button " onClick={()=>setCount((prev)=>prev+1)}>count</button>
    </div>
  </>;
}