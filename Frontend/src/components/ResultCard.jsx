const BACKEND_URL = "https://url-shortner-h2wp.onrender.com/api";

const ResultCard = ({ lastUrl }) => {

  if (!lastUrl) return null;

  const copyLink = () => {
    navigator.clipboard.writeText(`${BACKEND_URL}/${lastUrl}`);
  };

  return (

    <div className="w-full px-4 mt-8 flex justify-center">

      <div className="bg-slate-800 p-5 rounded-lg w-full max-w-2xl shadow-md">

        <p className="text-slate-400 mb-3 text-sm sm:text-base">
          Your Short Link
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">

          <a
            href={`${BACKEND_URL}/${lastUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline break-all flex-1"
          >
            trimly/{lastUrl}
          </a>

          <button
            onClick={copyLink}
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-4 py-2 rounded text-white text-sm font-medium transition"
          >
            Copy
          </button>

        </div>

      </div>

    </div>

  );
};

export default ResultCard;