const BACKEND_URL = "https://url-shortner-h2wp.onrender.com";

const ResultCard = ({ lastUrl }) => {

  if (!lastUrl) return null;

  const copyLink = () => {
    navigator.clipboard.writeText(`${BACKEND_URL}/${lastUrl}`);
  };

  return (

    <div className="mt-8 bg-slate-800 p-5 rounded-lg max-w-xl mx-3">

      <p className="text-slate-400 mb-2">
        Your Short Link
      </p>

      <div className="flex justify-between items-center">

        <a
          href={`${BACKEND_URL}/${lastUrl}`}
          target="_blank"
          className="text-blue-400 hover:underline break-all"
        >
          trimly/{lastUrl}
        </a>

        <button
          onClick={copyLink}
          className="bg-blue-600 cursor-pointer px-3 py-1 rounded text-white text-sm"
        >
          Copy
        </button>

      </div>

    </div>

  );
};

export default ResultCard;