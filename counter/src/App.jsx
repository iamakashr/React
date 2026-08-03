import React, { useState } from "react";
import Button from "./componenets/button.jsx";

const App = () => {
  const [count, setCount] = useState(0);

  const increse = () => {
    setCount(count + 1);
  };
  const decrese = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="h-screen bg-slate-800 flex flex-col justify-center items-center gap-10">
      <h1 className="text-9xl font-bold text-slate-400">counter {count} </h1>
      <div className="  flex items-center justify-center gap-4">
        <Button onClick={increse} className="bg-blue-500 hover:bg-blue-600">
          Add
        </Button>

        <Button onClick={decrese} className="bg-red-500 hover:bg-red-600">
          Remove
        </Button>

        <Button
          onClick={() => setCount(0)}
          className="bg-green-500 hover:bg-green-600">
          reset
        </Button>
      </div>
    </div>
  );
};

export default App;
