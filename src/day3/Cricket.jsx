import { useState } from "react";

export const Cricket = () => {
  const [curr, update] = useState(0);
  const [wicket, updateWicket] = useState(0);
  return (
    <div>
      <p>Runs:{curr}</p>
      <p>Wicket:{wicket}</p>
      <button onClick={() => update(curr + 1)} className="px-4 py-2 bg-red-500">
        1 runs
      </button>
      <button onClick={() => update(curr + 2)}>2 runs</button>
      <button onClick={() => update(curr + 4)}>4 runs</button>
      <button onClick={() => update(curr + 6)}>6 runs</button>
      <button onClick={() => update(0)}>Reset Runs</button>
      <button onClick={() => updateWicket(wicket + 1)}>Wicket</button>
      <button onClick={() => updateWicket(0)}>Reset Wickets</button>
    </div>
  );
};
