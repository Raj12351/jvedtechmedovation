import heroImage from "@/assets/images/hero-banner.jpeg";

const Hero = () => {
  return (
    <header className="relative h-[724px]">
      <span className="bg-brand/55 absolute bottom-[80px] left-0 w-[90%] max-w-[880px] px-[74px] py-[25px] text-3xl font-bold leading-snug tracking-wide text-white shadow-lg">
        <span className="text-[#C9B799]">JVEd</span> Tech Medovation is a
        for-profit Health Tech company focusing on capacity building in health
        facilities in India through training programs and supply of medical
        products
      </span>
      <div className="absolute left-0 top-0 -z-10 w-full">
        <img
          src={heroImage}
          className="h-[724px] w-full object-cover object-center"
        />
      </div>
    </header>
  );
};

export default Hero;
