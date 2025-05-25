const WebHeadline = () => {
  return (
    <div className="headline select-none overflow-hidden hidden md:flex justify-between items-center">
      <div className="head-text">
        <h2 className="text-[2.6vh] md:text-[2.7vw] font-semibold text-zinc-700 leading-none">
          Your Next Tech Obsession
        </h2>

        <h2 className="text-xl md:text-[2.5vw] font-semibold text-zinc-700 leading-none flex overflow-hidden">
          Starts Here -{" "}
          <span className="bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text">
            Blonify.
          </span>
        </h2>

        <p className="text-sm md:text-[1vw] text-zinc-700 mt-[1vh] md:mt-[1vw]">
          Your daily dose of smart tech starts here.
        </p>
      </div>
    </div>
  );
};

export default WebHeadline;
