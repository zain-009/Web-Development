import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref-hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$!@#$!@#$%";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPwd = useCallback(() => {
    passwordRef.current?.select(); //select text
    passwordRef.current?.setSelectionRange(0, 15); //selection range
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="bg-slate-400 h-screen w-full flex flex-col justify-center">
        <div className="flex flex-col flex-nowrap w-full max-w-md mx-auto shadow-lg rounded-lg px-4 text-white bg-slate-600 h-min">
          <span className="self-center font-semibold text-2xl my-2">
            Password Generator
          </span>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="cursor-default outline-none w-full py-1 px-3 text-black"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPwd} className="bg-blue-900 outline-none p-2">
              Copy
            </button>
          </div>
          <div className="mb-3 flex gap-x-5">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={15}
                value={length}
                className="cursor-pointer w-24"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="felx items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label className="ml-1">Numbers</label>
            </div>
            <div className="felx items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label className="ml-1">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
