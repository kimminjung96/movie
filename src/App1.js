import React, { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)
  const [keyword,setKeyword] = useState("")
  const onChange =(event) => setKeyword(event.target.value)

  //console.log("call an api")

  /* const iRunInlyOnce=()=>{
    console.log("i run only ince")
  }
  useEffect(iRunInlyOnce, []) */
  useEffect(() => {
    console.log("한번만 실행")
  }, []);
  useEffect(()=>{
    console.log("키워드가 바뀌면 실행")
  },[keyword])
  useEffect(()=>{
    console.log("카운트가 바뀌면 실행")
  },[counter])

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;

