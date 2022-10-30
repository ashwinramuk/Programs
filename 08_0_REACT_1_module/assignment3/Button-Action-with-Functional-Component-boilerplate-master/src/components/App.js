import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [para,setPara] = useState("")
  function displayPara(){
    setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
  }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={displayPara}>click</button>
      <p id="para">{para}</p>
    </div>
  );
}


export default App;
