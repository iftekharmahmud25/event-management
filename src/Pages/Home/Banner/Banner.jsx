

const Banner = () => {
    return (
        <div className="hero md:h-[300px] h-[280px] lg:h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/L9FGszK/musical-group-band-stage-bright-rays-419896-6239.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-4xl text-3xl lg:text-5xl font-bold text-white">Welcome to <span className="bg-gradient-to-r from-cyan-200 via-cyan-600 to-cyan-200 text-transparent bg-clip-text">&#8707;ntertainPlaza!!</span></h1>
      <p className="mb-5 md:text-lg text-sm text-gray-300">Experience the thrill of live concerts, mesmerizing theater performances, blockbuster film premieres, hilarious comedy shows, and more!</p>
      <p className="mb-5 md:text-lg text-sm text-gray-300 flex items-center">Let us make your entertainment dreams come true. <span className="bg-gradient-to-r from-cyan-200  to-cyan-600 text-transparent hover:bg-gradient-to-r hover:from-cyan-800 hover:to-cyan-200 bg-clip-text text-xl ">&#9829;</span></p>
    
    </div>
  </div>
</div>
    );
};

export default Banner;