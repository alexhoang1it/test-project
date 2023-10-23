import React, { useState } from "react";
  import ReactDom from "react-dom";
  const App = () => {
    const [count, setCount] = useState(0);
  
    const handleOnClick = () => {
      setCount(count + 1);
    };
  
    return (
      <>
        <p className="text">{count}</p>
        <form className="background">
          <label className="text" for="fname">First name:</label><br/>
          <input type="text" id="fname" name="fname"/><br/>
          <label className="text" for="lname">Last name:</label><br/>
          <input type="text" id="lname" name="lname"/>
        </form>
        <button onClick={handleOnClick}>Submit</button>
      </>
    );
  };
  
  ReactDom.render(<App />, document.getElementById("app"));

  