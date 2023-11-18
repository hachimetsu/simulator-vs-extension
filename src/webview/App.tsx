import React from "react";
export default function App(){
  const [count, setCount] = React.useState(0);
  return <>
    <div className="terminal w-screen h-screen flex justify-center items-center">
      <div className="count">count: {count}</div> <br/>
      <button type="button" className="button bg-blue-700 px-3 py-1 rounded-md" onClick={()=>setCount((prev)=>prev+1)}>
        <span className="">count</span>
      </button>
    </div>
  </>;
}