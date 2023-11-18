import React from "react";
export default function App(){
  const [count, setCount] = React.useState(0);
  return <>
    <h1 className="" onClick={()=>setCount((prev)=>prev+1)}>is it working there {count}</h1>
  </>;
}