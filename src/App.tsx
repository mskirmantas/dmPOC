import React from "react";
import "./App.css";

function App() {
  const currentURL = window.location.href;
  const urlStringParams = new URL(currentURL).searchParams;
  const params = Object.fromEntries(urlStringParams.entries());

  const ewmURL = params["LINK"];

  console.log(params);

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button>
        <a href={ewmURL}>Cancel</a>
      </button>

      <ul className="param-preview">
        <h4>List of passed parameters via query string:</h4>
        {Object.keys(params).map((keyName, i) => (
          <li key={i}>
            {keyName}: <span>{params[keyName]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
