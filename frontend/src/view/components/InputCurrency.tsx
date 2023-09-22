// -> Iconl lib
import { CrossCircledIcon } from '@radix-ui/react-icons';

// -> Format currency lib
import { NumericFormat } from 'react-number-format';
import { cn } from '../../app/utils/cn';

// -> Types components
interface InputCurrencyProps{
  error?: string;
  value?: string;
  onChange?(value: string): void;
}

export function InputCurrency({ error, value, onChange }: InputCurrencyProps) {
  return(
    <div>
      <NumericFormat
        value={value}
        onChange={event => onChange?.(event.target.value)}
        className={cn(
          'w-full text-gray-900 text-[32px] font-bold tracking-[-1px] outline-none',
          error && 'text-red-900'
        )}
      />

      {error &&
        <div className='flex gap-1 mt-2 items-center text-red-900 text-xs'>
          <CrossCircledIcon/>
          <span> {error} </span>
        </div>
      }
    </div>

  );
}
