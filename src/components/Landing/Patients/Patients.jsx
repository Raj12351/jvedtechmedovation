// import { IoArrowForwardSharp } from "react-icons/io5";

import {
  // Button,
  Eyebrow,
  Description,
} from "@/components";

const Patients = () => {
  return (
    <section
      className="grid min-h-[480px] grid-cols-1 items-center md:grid-cols-2"
      id="patients"
    >
      <div className="order-2 -mt-16 flex flex-col items-start gap-2 pr-0 md:order-1 md:mt-0 md:pr-12">
        <Eyebrow>Patients</Eyebrow>
        <Description>
          We are dedicated to improving the lives of patients fighting
          life-threatening diseases
        </Description>
        {/* <Button size="lg" variant="link" className="pl-0 text-primary">
          <span className="mr-1">More About Us</span>
          <IoArrowForwardSharp size={24} />
        </Button> */}
      </div>
      <div className="order-1 md:order-2">
        <img src="patients.png" />
      </div>
    </section>
  );
};

export default Patients;
