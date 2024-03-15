import heroImage from '@/assets/images/hero-banner.jpeg';

const Hero = () => {
  return (
    <div className="relative h-[480px]">
      <div className="h-full container flex items-center relative">
        <span className="max-w-[32ch] ml-12 p-4 bg-primary/55 text-white text-3xl font-bold shadow-lg leading-snug tracking-wide">
          JVEd Tech Medovation is a for-profit Health Tech company focusing on
          capacity building in health facilities in India through training
          programs and supply of medical products
        </span>
      </div>
      <div className="absolute w-full left-0 top-0 -z-10">
        <img
          src={heroImage}
          className="h-[480px] w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
