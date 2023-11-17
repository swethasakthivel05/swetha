// //  teacoffee


// // export default App;
// import { useState } from "react";
// import Cart from "./day3/coffeeShop/Cart";
// import Menu from "./day3/coffeeShop/Menu";
// import Navbar from "./day3/coffeeShop/Navbar";
// import categories from "./day3/coffeeShop/products";

// function App() {
//   const [activeCategory, setActiveCategory] = useState(categories[0]);
//   const [products, setProducts] = useState([]);

//   const handleClick = (index) => {
//     setActiveCategory(categories[index]);
//   };

//   const handleAddToCart = (item) => {
//     setProducts([...products, item]);
//   };

//   return (
//     <div className="space-y-4 my-4">
//       <Navbar category={categories} handleClick={handleClick} />
//       <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
//       <Cart products={products} />
//     </div>
//   );
// }

// export default App;

// // // //sample
// // // import "./App.css";
// // // import items from "./sample/items";

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <items></items>
// // //       </div>
// // //   )
// // // }

// // // export default App;
// // // //day 4
// // // import "./App.css";
// // // import Menu from "./day4/menu";

// // // function App() {
// // //   return (
// // //     <div>
// // //       <Menu />
// // //     </div>
// // //   );
// // // }

// // export default App;


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

//inline

// //import "./App.css";
// import Inline from "./day2/Inline";

// const App = () => {
//   return (
//     <div style={{ backgroundColor: "lightgray" }}>
//       <Inline></Inline>
//     </div>
//   )
// }

// export default App;

   
// export default App;

// components

// import "./App.css";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
// function App() {
//   return (
//     <div
//     style={{
//       backgroundImage:
//         'url("https://e0.pxfuel.com/wallpapers/169/818/desktop-wallpaper-black-group-1752%C3%971378-elegant-black-36-black-abstract-background-cool-powerpoint-background-black-background.jpg")',
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//     }}
//     >
//       <NavBar></NavBar>
//       <br></br>
//       <Main></Main>
//       <br></br>
//       <Footer></Footer>
//     </div>
//   );
//     }
   
// export default App;


//project
//loginpage

import React from 'react';
import LoginPage from './Project/LoginPage';
const App = () => {
  return (
    <div>
      <center>
    <LoginPage></LoginPage>
    </center>
    </div>
  );
};

export default App;
