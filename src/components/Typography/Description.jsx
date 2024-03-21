import { cn } from "@/lib/utils";

const Description = ({ children, className, ...props }) => {
  return (
    <h2
      className={cn(
        "mb-2 text-2xl font-light tracking-wider md:text-4xl md:font-normal",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Description;
