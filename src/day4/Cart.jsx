import { responsiveFontSizes } from "@mui/material";

const Cart = ({ products }) => {
  return (
    <div className="px-6">
      <center>
        <button
          className="flex gap-x-2 py-2 rounded-lg px-4"
          style={{ backgroundColor: "burlywood" }}
        >
          <h1 className="font-bold">Cart</h1>
        </button>
      </center>
      <ul>
        <center>
          {products.map((item, index) => (
            <li key={index} style={{ color: "bisque", fontSize: 20 }}>
              {item.name} - {item.price}
            </li>
          ))}
        </center>
      </ul>
    </div>
  );
};

export default Cart;
