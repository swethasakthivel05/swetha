import { useState } from "react";

const Count = () => {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  return (
    <div>
      <p>
        Run : {count} &emsp;
        <br></br>
        Wicket : {count1} &emsp;
      </p>
      <button
        classname="px-4 py-4 bg-red-500"
        onClick={() => setcount(count + 1)}
      >
        1 RUN
      </button>
    </div>
  );
};
