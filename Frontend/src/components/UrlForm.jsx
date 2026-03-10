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

    <form
      onSubmit={formHandler}
      className="flex flex-col md:flex-row gap-3 max-w-xl mx-3"
    >

      <input
        type="text"
        placeholder="Paste your long URL here..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white outline-none"
      />

      <button
        className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold"
      >
        Shorten
      </button>

    </form>

  );
};

export default UrlForm;