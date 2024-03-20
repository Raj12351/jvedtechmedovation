import { Eyebrow, Description } from "@/components/Typography";

const Hospitals = () => {
  return (
    <section
      className="grid min-h-[480px] grid-cols-2 items-center"
      id="hospitals"
    >
      <div className="flex flex-col items-start gap-2 pr-12">
        <Eyebrow>Hospitals</Eyebrow>
        <Description>
          We provide supplies and equipment to health facilities across India
        </Description>
      </div>
      <div>
        <img src="hospitals.png" className="h-full w-full max-w-full" />
      </div>
    </section>
  );
};

export default Hospitals;
