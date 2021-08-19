import React from "react";
import "./App.css";

function App() {
  const currentURL = window.location.href;
  const indexOfLink = currentURL.indexOf("LINK");
  const ewmURL = currentURL.substring(indexOfLink + 5);

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button>
        <a href={ewmURL}>Cancel</a>
      </button>
    </div>
  );
}

export default App;
