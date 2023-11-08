import "./App.css";
import Button from "./day3/Button";
import { Cricket } from "./day3/Cricket";
import { Dynamicrendering } from "./day3/Dynamicrendering";
function App() {
  return (
    <div>
      <Button color="green" >Green Button</Button>
      <Button color="red">Red Button</Button>
      <Button color="yellow">Yellow Button</Button>
      <Button color="blue">Blue Button</Button>
      <Dynamicrendering></Dynamicrendering>
      <Cricket></Cricket>
    </div>
  );
}

 export default App;

// day 2
// import "./App.css";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
// import { Cricket } from "./day3/Cricket";
// function App() {
//   return (
//     <div>
//       <Cricket />
//     </div>
//   );
//     }
   
// export default App;