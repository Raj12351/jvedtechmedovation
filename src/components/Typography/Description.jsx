import { cn } from "@/lib/utils";

const Description = ({ children, className, ...props }) => {
  return (
    <h2 className={cn("mb-2 text-4xl tracking-wider", className)} {...props}>
      {children}
    </h2>
  );
};

export default Description;
