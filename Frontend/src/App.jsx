import { useState } from "react";
import api from "./axios.js";

const BACKEND_URL = "https://url-shortner-h2wp.onrender.com";

const App = () => {

  const [inputVal, setInputVal] = useState("");
  const [lastUrl, setLastUrl] = useState(null);

  const formHandler = async (e) => {
    e.preventDefault();

    if (!inputVal) return;

    try {
      const res = await api.post("/short", {
        originalUrl: inputVal
      });

      setLastUrl({
        shortId: res.data.shortenUrl
      });

    } catch (err) {
      console.log("Error:", err);
    }

    setInputVal("");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`${BACKEND_URL}/${lastUrl.shortId}`);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">

      <div className="bg-slate-800 p-8 rounded-xl shadow-xl w-full max-w-lg">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Trimly URL Shortener
        </h1>

        <p className="text-slate-400 text-center mb-6">
          Paste a long URL and create a short shareable link
        </p>

        <form onSubmit={formHandler} className="flex gap-2">

          <input
            type="text"
            placeholder="https://example.com/very-long-url"
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

            <div className="flex items-center justify-between">

              <a
                href={`${BACKEND_URL}/${lastUrl.shortId}`}
                target="_blank"
                className="text-blue-400 hover:underline break-all"
              >
                trimly/{lastUrl.shortId}
              </a>

              <button
                onClick={copyLink}
                className="ml-3 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm text-white"
              >
                Copy
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default App;