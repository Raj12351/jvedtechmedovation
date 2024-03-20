import { Description, Eyebrow } from "@/components/Typography";

const HealthcareProfessionals = () => {
  return (
    <section
      className="bg-brandSecondary grid min-h-[480px] grid-cols-2 items-center gap-2"
      id="healthcare-professionals"
    >
      <div>
        <img src="healthcare-professionals.png" />
      </div>
      <div className="flex flex-col items-start gap-2 pr-12">
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
