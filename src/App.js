// day 3

// import "./App.css";
// import Cricket from "./day3/Cricket";
// function App() {
//   return (
//     <div>
//       <Cricket></Cricket>
//     </div>
//   );
//     }
   
// export default App;

// day 2

// import "./App.css";
// import HelloWorld from "./day2/HelloWorld";
// function App() {
//   return (
//     <div>
//       <HelloWorld></HelloWorld>
//     </div>
//   );
//     }
   
// export default App;

// components

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
function App() {
  return (
    <div
    style={{
      backgroundImage:
        'url("https://e0.pxfuel.com/wallpapers/169/818/desktop-wallpaper-black-group-1752%C3%971378-elegant-black-36-black-abstract-background-cool-powerpoint-background-black-background.jpg")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
    >
      <NavBar></NavBar>
      <br></br>
      <Main></Main>
      <br></br>
      <Footer></Footer>
    </div>
  );
    }
   
export default App;