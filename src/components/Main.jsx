import React from "react";

const Main = () => {
  return (
    <div>
      <center>
        <br></br>
        <label for="name">Profile: &emsp;</label>
        <br></br>
        <br></br>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShN0nuLT7HIpIANuDi6wbMKpeuCgZsl2PtAA&usqp=CAU"></img>
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
