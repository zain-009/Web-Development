import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="h-screen w-full duration-200 flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex bg-white justify-center rounded-full shadow-lg mx-5 bottom-6 px-3">
        <button
          onClick={() => {
            setColor("red");
          }}
          className="outline-none rounded-full text-white p-1 m-1 shadow-sm"
          style={{ backgroundColor: "red" }}
        >
          red
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="outline-none rounded-full text-white p-1 m-1 shadow-sm"
          style={{ backgroundColor: "blue" }}
        >
          blue
        </button>
        <button
          onClick={() => {
            setColor("white");
          }}
          className="outline-none rounded-full text-black p-1 m-1 shadow-sm"
          style={{ backgroundColor: "white" }}
        >
          white
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="outline-none rounded-full text-white p-1 m-1 shadow-sm"
          style={{ backgroundColor: "green" }}
        >
          green
        </button>
        <button
          onClick={() => {
            setColor("olive");
          }}
          className="outline-none rounded-full text-white p-1 m-1 shadow-sm"
          style={{ backgroundColor: "olive" }}
        >
          olive
        </button>
        <button
          onClick={() => {
            setColor("teal");
          }}
          className="outline-none rounded-full text-white p-1 m-1 shadow-sm"
          style={{ backgroundColor: "teal" }}
        >
          teal
        </button>
      </div>
    </div>
  );
}

export default App;
