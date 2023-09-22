// -> ReactJS
import { useState } from 'react';

// -> Icons lib
import { CrossCircledIcon } from '@radix-ui/react-icons';

// -> Utils
import { cn } from '../../app/utils/cn';
import { formatDate } from '../../app/utils/formatDate';

// -> Components
import { Popover } from './Popover';
import { DatePicker } from './DatePicker';

// -> Type component
interface DataPickerInputProps{
  error?: string;
  className?: string;
}

export function DataPickerInput({ error, className }: DataPickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button
            type='button'
            className={cn(
              'bg-white flex w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-700 transition-all outline-none text-left relative pt-4',
              error && '!border-red-900',
              className
            )}
          >
            <span className='text-gray-700 text-xs left-[13px] top-1 pointer-events-none absolute'> Data </span>
            <span> {formatDate(selectedDate)} </span>
          </button>
        </Popover.Trigger>

        <Popover.Content>
          <DatePicker
            value={selectedDate}
            onChange={date => setSelectedDate(date)}
          />
        </Popover.Content>
      </Popover.Root>

      {error &&
        <div className='flex gap-1 mt-2 items-center text-red-900 text-xs'>
          <CrossCircledIcon/>
          <span className=''> {error} </span>
        </div>
      }
    </div>
  );
}
