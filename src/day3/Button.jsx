import React from "react";

function Button({ lable, color }) {
  return <button className={"px-4 py-2 bg-red-500 rounded-lg"}>{lable}</button>;
}

export default Button;
