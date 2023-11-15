import { useState } from "react";

const menu = [
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

const items = () => {
  return (
    <div>
      <button>Tea</button>
      <button>Coffee</button>
    </div>
  );
};

export default items;
