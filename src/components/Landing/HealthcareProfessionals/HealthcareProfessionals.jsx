import { Description, Eyebrow } from "@/components/Typography";

const HealthcareProfessionals = () => {
  return (
    <section
      className="bg-brand-secondary grid min-h-[480px] grid-cols-1 items-center gap-2 md:grid-cols-2"
      id="healthcare-professionals"
    >
      <div>
        <img src="healthcare-professionals.png" />
      </div>
      <div className="flex flex-col items-start gap-2 pl-4 pr-0 md:pl-0 md:pr-12">
        <Eyebrow>Healthcare Professionals</Eyebrow>
        <Description>
          We engage in widespread education and training programs for
          facilitating continuous learning
        </Description>
      </div>
    </section>
  );
};

export default HealthcareProfessionals;
