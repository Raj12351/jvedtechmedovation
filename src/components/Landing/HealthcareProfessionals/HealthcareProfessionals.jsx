// import { IoArrowForwardSharp } from 'react-icons/io5';
// import { Button } from '../ui/button';

import { Description, Eyebrow } from '@/components/Typography';

const HealthcareProfessionals = () => {
  return (
    <section
      className="grid grid-cols-2 min-h-[480px] items-center bg-gray-100"
      id="healthcare-professionals"
    >
      <div>Image</div>
      <div className="flex flex-col gap-2 items-start pr-12">
        <Eyebrow>Healthcare Professionals</Eyebrow>
        {/* SubText */}
        <Description>
          We engage in widespread education and training programs for
          facilitating continuous learning
        </Description>
        {/* <Button size="lg" variant="link" className="text-primary pl-0">
          <span>More About Us</span>
          <IoArrowForwardSharp size={24} />
        </Button> */}
      </div>
    </section>
  );
};

export default HealthcareProfessionals;
