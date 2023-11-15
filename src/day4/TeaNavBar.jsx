import React from "react";

const TeaNavBar = ({ handleChangeCategory }) => {
  return (
    <div>
      <button onClick={() => handleChangeCategory(0)}>Tea</button>
      <button onClick={() => handleChangeCategory(1)}>Coffee</button>
    </div>
  );
};

export default TeaNavBar;
