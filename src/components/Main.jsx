import React from "react";

const Main = () => {
  return (
    <div>
      <centre>
        <label for="name">Email Id: &emsp;</label>
        <input id="name" type="Email" placeholder="Email ID"></input>
        <br></br>
        <label for="na">Password: &emsp;</label>
        <input id="na" type="Password" placeholder="Password"></input>
        <br></br>
        <button>SUBMIT</button>
      </centre>
    </div>
  );
};

export default Main;
