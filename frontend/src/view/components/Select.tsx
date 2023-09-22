// -> ReactJS
import { useState } from 'react';

// -> Select lib
import * as RdxSelect from '@radix-ui/react-select';

// -> Icons lib
import { ChevronDownIcon, ChevronUpIcon, CrossCircledIcon } from '@radix-ui/react-icons';

// -> Utils
import { cn } from '../../app/utils/cn';

// -> Types component
interface SelectProps {
  error?: string
  value?: string
  className?: string
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange?(value: string): void;
}

export function Select({ error, options, className, placeholder, value, onChange }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value);

  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }

  return (
    <div>
      <div className='relative'>
        <label
          className={cn(
            'absolute z-10 top-1/2 -translate-y-1/2 left-3 text-gray-700 pointer-events-none',
            selectedValue && 'top-1.5 text-xs left-3 translate-y-0'
          )}
        >
          {placeholder}
        </label>

        <RdxSelect.Root value={value} onValueChange={handleSelect}>
          <RdxSelect.Trigger
            className={cn(
              'bg-white flex w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 focus:border-gray-800 transition-all outline-none text-left relative pt-4',
              error && '!border-red-900',
              className
            )}
          >
            <RdxSelect.Value/>
            <RdxSelect.Icon className='absolute right-3 top-4'>
              <ChevronDownIcon className='h-6 w-6 text-gray-800' />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content
              className="overflow-hidden bg-white z-[99] rounded-2xl border border-gray-200 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]"
            >
              <RdxSelect.ScrollUpButton
                className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default"
              >
                <ChevronUpIcon />
              </RdxSelect.ScrollUpButton>

              <RdxSelect.Viewport className="p-2">
                {options.map((option) => (
                  <RdxSelect.Item
                    key={option.value}
                    className='p-2 text-gray-800 text-sm data-[state=checked]:font-bold data-[highlighted]:bg-gray-50 rounded-lg outline-none transition-colors cursor-pointer '
                    value={option.value}
                  >
                    <RdxSelect.ItemText> {option.label} </RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>

              <RdxSelect.ScrollDownButton
                className="flex items-center justify-center h-[25px] bg-white text-gray-800s cursor-default"
              >
                <ChevronDownIcon />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>

      {error &&
        <div className='flex gap-1 mt-2 items-center text-red-900 text-xs'>
          <CrossCircledIcon/>
          <span className=''> {error} </span>
        </div>
      }
    </div>

  );
}

