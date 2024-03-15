import { cn } from '@/lib/utils';

const Eyebrow = ({ className, children, ...props }) => {
  return (
    <h4
      className={cn('text-base text-black font-medium', className)}
      {...props}
    >
      {children}
    </h4>
  );
};

export default Eyebrow;
