import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [pass, setPass] = useState("kahdsfih");
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [upper, setUpper] = useState(false);

  const genPassword = () => {
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (num === true) str += "0123456789";
    if (char === true) str += "~!@#$%^&*()_+{}[]></?";
    if (upper === true) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let res = "";
    for (let i = 0; i < len; i++) {
      let idx = Math.floor(Math.random() * str.length);
      res += str.charAt(idx + 1);
    }
    return res;
  };

  useEffect(() => {
    let res = genPassword();
    setPass(res);
  }, [len, num, char, upper, setPass]);

  const handleLength = (val) => {
    if (val >= 8) setLen(val);
    else setLen(8);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pass).then(() => {
      var toast = document.getElementById("toast");
      toast.classList.remove("hidden");
      setTimeout(function () {
        toast.classList.add("hidden");
      }, 1000);
    });
  };

  return (
    <>
      <h2 className=" w-fit text-3xl font-semibold py-2 px-10 mt-5 mx-auto rounded-xl shadow-sm shadow-slate-400 tracking-widest cursor-pointer">
        Password Generator
      </h2>
      <form className=" w-3/4 md:w-2/4 mt-5 flex-col mx-auto flex" action="">
        <div className=" w-full justify-center flex flex-row mx-auto">
          <input
            className=" rounded-s-lg bg-stone-100 border-2 w-10/12 p-2"
            type="text"
            name="password"
            value={pass}
            id="password"
          />

          <input
            className=" cursor-pointer rounded-e-lg p-2 bg-blue-200 font-semibold border-2 w-fit border-l-0"
            type="button"
            value="Copy"
            onClick={handleCopy}
          />
        </div>

        <div className=" w-10/12 mx-auto p-2 flex flex-wrap align-middle justify-cente">
          <div className="">
            <label htmlFor="length">Length </label>
            <input
              className=""
              type="range"
              min={0}
              max={32}
              step={1}
              value={len}
              onChange={(e) => {
                return handleLength(e.target.value);
              }}
              name="length"
              id="length"
            />
            <span className=" bg-white p-1 rounded-md">{len}</span>
          </div>

          <div className=" ml-5">
            <input
              type="checkbox"
              value={num}
              onChange={() => setNum(!num)}
              name="numAllowed"
              id="numAllowed"
            />
            <label htmlFor="numAllowed"> Number</label>
          </div>

          <div className=" ml-5">
            <input
              type="checkbox"
              value={char}
              onChange={() => setChar(!char)}
              name="charAllowed"
              id="charAllowed"
            />
            <label htmlFor="charAllowed"> Character</label>
          </div>

          <div className=" ml-5">
            <input
              type="checkbox"
              value={upper}
              onChange={() => setUpper(!upper)}
              name="uppercase"
              id="uppercase"
            />
            <label htmlFor="uppercase"> Uppercase</label>
          </div>
        </div>

        <div
          id="toast"
          class="hidden fixed top-5 right-5 bg-green-500 text-white px-3 py-1 rounded-md"
        >
          Text Copied!
        </div>
      </form>
    </>
  );
}

export default App;
