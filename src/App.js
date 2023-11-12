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
        'url("https://image.slidesdocs.com/responsive-images/background/white-nature-leaf-natural-plant-beautiful-powerpoint-background_696ac76cd9__960_540.jpg")',
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