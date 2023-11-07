import React from "react";

const Main = () => {
  return (
    <div>
      <center>
        <br></br>
        <label for="name">Profile: &emsp;</label>
        <br></br>
        <br></br>
        <img src="data:image/jpeg;base64,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"></img>
        <br></br>
        <br></br>
        <label for="name">Email Id: &emsp;</label>
        <input id="name" type="Email" placeholder="Email ID"></input>
        <br></br>
        <br></br>
        <label for="na">Password: &emsp;</label>
        <input id="na" type="Password" placeholder="Password"></input>
        <br></br>
        <br></br>
        <button>SUBMIT</button>
        <br></br>
        <br></br>
      </center>
    </div>
  );
};
export default Main;
