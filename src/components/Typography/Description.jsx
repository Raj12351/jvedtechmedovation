import { cn } from '@/lib/utils';

const Description = ({ children, className, ...props }) => {
  return (
    <h2 className={cn('text-4xl tracking-wider mb-2', className)} {...props}>
      {children}
    </h2>
  );
};

export default Description;
