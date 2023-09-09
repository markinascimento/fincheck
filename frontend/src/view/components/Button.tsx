// -> React imports
import { ComponentProps, ReactNode } from 'react';

// -> Utils functions
import { cn } from '../../app/utils/cn';

// Components
import { Spinner } from './Spinner';

// -> Types component
interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  children: ReactNode;
}

export function Button({ isLoading, children, disabled, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'flex justify-center items-center bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 px-6 h-[52px] rounded-2xl text-white font-semibold disabled:text-gray-400 disabled:cursor-not-allowed transition-all active:bg-teal-950',
        className
      )}
    >
      {!isLoading && children}

      {isLoading && <Spinner className='w-6 h-6'/>}
    </button>
  );
}
