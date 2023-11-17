import React from "react";

const Main = () => {
  return (
    <div>
      //{" "}
      <h2 style={{ color: "darkblue" }}>
        <center>LOGIN PAGE</center>
      </h2>
      <center>
        {/* <label for="name">Email Id  :   &emsp;</label>
              <input  id="name" type="box" placeholder="Email ID"></input>
           <br></br>
               <label for="na"> Password :&emsp;</label>
             <input id="na" type="box" placeholder="Password"></input>
           <br></br>
               {/* <label for="n">Submit: &emsp;</label>
            <input id="n" type="box" placeholder="click"></input>
            <br></br> */}
        {/* <button type="submit"><center>Login</center></button>  */}
        {/* <input></input> */}

        <label for="fname">First Name:</label>
        <br></br>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="First name"
        ></input>
        <br></br>

        <label for="lname">Last Name:</label>
        <br></br>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Last name"
        ></input>
        <br></br>

        <label for="mail">Email ID: &emsp; </label>
        <br></br>
        <input type="email" id="mail" placeholder="Email ID"></input>
        <br></br>

        <label for="pw">Password:</label>
        <br></br>
        <input
          type="password"
          id="pw"
          placeholder="Enter your password"
          required
        ></input>

        <br></br>

        <button></button>

        {/* <input type="submit" value="LOGIN"></input> */}

        {/* <h1 style={{color: "red"}}>Welcome!!!</h1> */}
      </center>
    </div>
  );
};

export default Main;
