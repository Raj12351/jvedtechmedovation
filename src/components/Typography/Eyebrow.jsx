import { cn } from "@/lib/utils";

const Eyebrow = ({ className, children, ...props }) => {
  return (
    <h4
      className={cn("text-sm font-semibold text-black md:text-base", className)}
      {...props}
    >
      {children}
    </h4>
  );
};

export default Eyebrow;
