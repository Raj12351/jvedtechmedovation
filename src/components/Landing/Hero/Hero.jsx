import heroImage from "@/assets/images/hero-banner.jpeg";

const Hero = () => {
  return (
    <header className="relative h-[80vh] md:h-[724px]">
      <span className="bg-brand/55 absolute bottom-[40px] left-0 w-full max-w-[880px] px-[8px] py-[25px] text-center text-xl font-bold leading-8 tracking-wide text-white shadow-lg md:bottom-[80px] md:w-[90%] md:px-[74px] md:text-start md:text-3xl md:leading-snug">
        <span className="text-[#C9B799]">JVEd</span> Tech Medovation is a
        for-profit Health Tech company focusing on capacity building in health
        facilities in India through training programs and supply of medical
        products
      </span>
      <div className="absolute left-0 top-0 -z-10 w-full">
        <img
          src={heroImage}
          className="h-[80vh] w-full object-cover object-center md:h-[724px]"
        />
      </div>
    </header>
  );
};

export default Hero;
