import { Eyebrow, Description } from "@/components/Typography";

const Hospitals = () => {
  return (
    <section
      className="grid min-h-[480px] grid-cols-1 items-center md:grid-cols-2"
      id="hospitals"
    >
      <div className="order-2 -mt-24 flex flex-col items-start gap-2 pr-0 md:order-1 md:mt-0 md:pr-12">
        <Eyebrow>Hospitals</Eyebrow>
        <Description>
          We provide supplies and equipment to health facilities across India
        </Description>
      </div>
      <div className="order-1 md:order-2">
        <img src="hospitals.png" />
      </div>
    </section>
  );
};

export default Hospitals;
