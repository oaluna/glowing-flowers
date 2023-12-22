import MeshGradient from "../../assets/mesh-gradient.png"

const Hero = () => {
  return (
    <section className="max-w-screen h-screen p-0 m-0 text-white bg-slate-900 flex-1 items-center">
      <img
        src="https://images.pexels.com/photos/613001/pexels-photo-613001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="flowers"
        className="p-0 absolute left-0 max-w-full w-1/2 h-screen object-cover overflow-hidden bg-clip-text mix-blend-difference"
      />
      <img src={MeshGradient} className="p-0 absolute right-0  max-w-full w-1/2 h-screen object-cover overflow-hidden mix-blend-hue-rotate  bg-clip-content" alt=""/>
      <div className="w-full p-0 m-0 flex h-full items-center">
        <div className="p-0 m-0 z-10 w-screen mx-auto text-center text-white bg-transparent bg-clip-text mix-blend-exclusion tracking-none leading-none">
          <div className="flex flex-row items-center w-screen h-screen lg:h-auto justify-around lg:mt-[20%]">
            <h1 className="text-4xl md:text-6xl lg:text-[160px] font-thin font-[Urbanist] uppercase text-white z-0 w-full">
              Glowing
            </h1>

            <h1 className="text-4xl md:text-6xl lg:text-[160px] font-thin font-[Urbanist] uppercase text-white z-0 w-full">
              Flowers
            </h1>
          </div>
          <p className="absolute md:relative top-[55%] left-auto right-auto w-full font-[Urbanist] text-xl md:text-4xl font-light tracking-[1px] sm:block z-0 my-0 lg:mb-[20%] lg:mt-0 lg:h-[40px]">
            {" "}
            Plants, Gifts & Balloons{" "}
          </p>
        </div>
      </div>
      <div className="absolute w-screen mx-auto flex-col bottom-20 text-center items-center h-24 md:h-48 md:bottom:40 lg:bottom-12">
        <p className="text-white  max-w-xl sm:text-xl/relaxed font-normal tracking-tight md:tracking-[1.25px] font-[Urbanist mix-blend-normal mx-auto leading-tight">
          Simple and beautiful floral arrangements, located in the heart of San
          Francisco.
        </p>
      </div>
      <div className="absolute z-10 flex flex-row flex-wrap items-start justify-center w-screen h-auto gap-1 md:gap-8 py-8 top-[72%]">
        <a
          className="block min-w-[220px] rounded border border-slate-50 bg-transparent px-12 py-3 text-2xl font-medium text-slate-50 mix-blend-difference hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 text-center font-[Urbanist]"
          href="/shop"
        >
          Shop Now
        </a>

        <a
          className="block min-w-[220px] rounded border border-slate-50 bg-slate-50 px-12 py-3 text-2xl font-medium text-slate-500 mix-blend-difference focus:outline-none focus:ring active:bg-blue-500 text-center font-[Urbanist]"
          href="/login"
        >
          Sign In
        </a>
      </div>
    </section>
  );
};

export default Hero;
