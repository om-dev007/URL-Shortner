import { useState } from "react";
import Hero from "../components/Hero";
import UrlForm from "../components/UrlForm";
import ResultCard from "../components/ResultCard";
import Features from "../components/Features";

const Home = () => {

  const [lastUrl, setLastUrl] = useState(null);

  return (

    <div className="bg-slate-900 min-h-screen text-white">

      <Hero />

      <UrlForm setLastUrl={setLastUrl} />

      <ResultCard lastUrl={lastUrl} />

      <Features />

    </div>

  );
};

export default Home;