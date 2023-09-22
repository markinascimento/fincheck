// -> ReactJS
import { ComponentProps, forwardRef } from 'react';

// -> Icon lib
import { CrossCircledIcon } from '@radix-ui/react-icons';

// -> Utils functions
import { cn } from '../../app/utils/cn';

// -> Types component
interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((
  { id, name, error, className, placeholder, ...props },
  ref
) => {
  const inputId = id ?? name;

  return (
    <div className='relative'>
      <input
        {...props}
        ref={ref}
        name={name}
        id={inputId}
        className={cn(
          'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-3 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
          error && '!border-red-900',
          className
        )}
        placeholder=' '
      />
      <label
        htmlFor={inputId}
        className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base
        peer-placeholder-shown:top-3.5 transition-all'
      >
        {placeholder}
      </label>

      {error &&
        <div className='flex gap-1 mt-2 items-center text-red-900 text-xs'>
          <CrossCircledIcon/>
          <span className=''> {error} </span>
        </div>
      }
    </div>
  );
});
