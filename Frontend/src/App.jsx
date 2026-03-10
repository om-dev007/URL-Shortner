import { useState } from "react";
import api from "./axios.js";

const App = () => {

  const [inputVal, setInputVal] = useState("");
  const [shortUrls, setShortUrls] = useState([]);

  const formHandler = async (e) => {
    e.preventDefault();

    if (!inputVal) return;

    try {
      const res = await api.post("/short", { originalUrl: inputVal });

      const newShort = {
        shortId: res.data.shortenUrl
      };

      setShortUrls(prev => [...prev, newShort]);

    } catch (err) {
      console.log("Error:", err);
    }

    setInputVal("");
  };

  const lastUrl = shortUrls[shortUrls.length - 1];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">

      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-lg">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          URL Shortener
        </h1>

        <p className="text-slate-400 text-center mb-6">
          Turn long links into short, shareable URLs
        </p>

        <form onSubmit={formHandler} className="flex gap-2">

          <input
            type="text"
            placeholder="Paste your long URL..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white font-semibold transition"
          >
            Shorten
          </button>

        </form>

        {lastUrl && (
          <div className="mt-6 bg-slate-700 p-4 rounded-lg">

            <p className="text-slate-300 mb-2">
              Your Short Link
            </p>

            <a
              href={`http://localhost:5000/${lastUrl.shortId}`}
              target="_blank"
              className="text-blue-400 break-all hover:underline"
            >
              http://localhost:5000/{lastUrl.shortId}
            </a>

          </div>
        )}

      </div>

    </div>
  );
};

export default App;