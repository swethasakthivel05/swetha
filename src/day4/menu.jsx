import { useState } from "react";
import TeaNavBar from "./TeaNavBar";
import Teamenu from "./Teamenu";
const items = [
  {
    title: "Tea",
    varient: [
      {
        name: "Ginger Tea",
        price: "30",
      },
      {
        name: "Green Tea",
        price: "25",
      },
      {
        name: "Masala Tea",
        price: "35",
      },
    ],
  },
  {
    title: "Coffee",
    varient: [
      {
        name: "Black Coffee",
        price: "40",
      },
      {
        name: "Dark Coffee",
        price: "30",
      },
      {
        name: "Normal Coffee",
        price: "25",
      },
    ],
  },
];

const Menu = () => {
  const [ActiveCategory, setActiveCategory] = useState(0);
  const [products, setproducts] = useState([]);
  const [Totalprice, setTotalprice] = useState(0);
  const handleChangeCategory = (Category) => {
    setActiveCategory(Category);
  };
  const handleAddToCart = (item) => {
    setproducts([items, ...products]);
  };
  <h1>Cart Total: {Totalprice}</h1>;
  return (
    <div>
      <TeaNavBar handleChangeCategory={handleChangeCategory} />
      <Teamenu ActiveCategory={ActiveCategory} menu={items} />
      {items[ActiveCategory].varient.map((value, index) => (
        <li>{value}</li>
      ))}
    </div>
  );
};

export default Menu;
