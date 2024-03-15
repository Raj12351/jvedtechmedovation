// import { IoArrowForwardSharp } from 'react-icons/io5';
// import { Button } from '../ui/button';

import { Eyebrow } from '@/components/Typography';

const Hospitals = () => {
  return (
    <section
      className="grid grid-cols-2 min-h-[480px] items-center"
      id="hospitals"
    >
      <div className="flex flex-col gap-2 items-start pr-12">
        <Eyebrow>Hospitals</Eyebrow>
        {/* SubText */}
        <h2 className="text-4xl tracking-wider mb-2">
          We provide supplies and equipment to health facilities across India
        </h2>
        {/* <Button size="lg" variant="link" className="text-primary pl-0">
          <span>More About Us</span>
          <IoArrowForwardSharp size={24} />
        </Button> */}
      </div>
      <div>Image</div>
    </section>
  );
};

export default Hospitals;
