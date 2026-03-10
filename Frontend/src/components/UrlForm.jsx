import { useState } from "react";
import api from "../services/api";

const UrlForm = ({ setLastUrl }) => {

  const [inputVal, setInputVal] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();

    if (!inputVal) return;

    try {

      const res = await api.post("/short", {
        originalUrl: inputVal
      });

      setLastUrl(res.data.shortenUrl);

      setInputVal("");

    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="w-full px-4 mt-6 flex justify-center">

      <form
        onSubmit={formHandler}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl"
      >

        <input
          type="text"
          placeholder="Paste your long URL here..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white outline-none 
          focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-6 py-3 rounded-lg 
          text-white font-semibold transition"
        >
          Shorten
        </button>

      </form>

    </div>

  );
};

export default UrlForm;