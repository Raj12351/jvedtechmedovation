// import { IoArrowForwardSharp } from "react-icons/io5";

import {
  // Button,
  Eyebrow,
  Description,
} from "@/components";

const Patients = () => {
  return (
    <section
      className="grid min-h-[480px] grid-cols-2 items-center"
      id="patients"
    >
      <div className="flex flex-col items-start gap-2 pr-12">
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
      <div>
        <img src="patients.png" />
      </div>
    </section>
  );
};

export default Patients;
