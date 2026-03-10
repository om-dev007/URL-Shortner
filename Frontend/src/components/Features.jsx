const Features = () => {

  const features = [
    {
      title: "Instant URL Shortening",
      desc: "Convert long URLs into short links instantly."
    },
    {
      title: "Fast Redirection",
      desc: "Users are redirected to the original page in milliseconds."
    },
    {
      title: "Clean Links",
      desc: "Share simple and readable short links."
    },
    {
      title: "Responsive Design",
      desc: "Works perfectly on desktop, tablet and mobile."
    }
  ];

  return (

    <section className="py-16 px-4">

      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-slate-800 p-6 rounded-lg"
          >

            <h3 className="text-xl text-white mb-2">
              {feature.title}
            </h3>

            <p className="text-slate-400">
              {feature.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
};

export default Features;