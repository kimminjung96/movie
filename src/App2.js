import React, { useState, useEffect } from "react";

function Hello() {
  /*   function byFn(){
      console.log("bye :(")
    }
    function hiFn(){
      console.log("hi :)")
      return byFn;
    }
    useEffect(hiFn,[]); */
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(")
    //cleanup function = 컴포넌트가 없어질때 뭔가 할수 있도록 해줌
  }, []);
  /* useEffect(function () {
    console.log("created :)");
    return function () {
      console.log("destroyed :(")
    }
  }, []); */
  return (
    <h1>Hello</h1>
  )
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  )
}

export default App;

