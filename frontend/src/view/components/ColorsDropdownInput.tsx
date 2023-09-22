// -> Components
import { ChevronDownIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';
import { DropdownMenu } from './DropdownMenu';
import { ColorIcon } from '../../assets/icons/ColorIcon';
import { colors } from '../../app/ config/colors';
import { useState } from 'react';

// -> Type component
interface ColorsDropdownInputProps{
  error?: string;
  className?: string;
  value?: string;
  onChange?(value: string): void;
}

type Color = {
  color: string;
  bg: string;
}

export function ColorsDropdownInput({ error, className, value, onChange }: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<null | Color>(() => {
    if (!value){
      return null;
    }

    return colors.find(({ color }) => color === value) ?? null;
  });

  function handleSelectedColor(color: Color) {
    setSelectedColor(color);
    onChange?.(color.color);
  }

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className={cn(
              'bg-white flex w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-700 focus:border-gray-800 transition-all outline-none text-left relative pt-4',
              error && '!border-red-900',
              className
            )}
          >
            Cor

            <div className='absolute right-3 top-1/2 -translate-y-1/2'>
              {!selectedColor &&
              <ChevronDownIcon className='w-6 h-6 text-gray-800' />
              }

              {selectedColor &&
              <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
              }
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          className='grid grid-cols-4'
        >
          {colors.map((color) => (
            <DropdownMenu.Item
              key={color.color}
              onSelect={() => handleSelectedColor(color)}
            >
              <ColorIcon color={color.color} bg={color.bg} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error &&
        <div className='flex gap-1 mt-2 items-center text-red-900 text-xs'>
          <CrossCircledIcon/>
          <span className=''> {error} </span>
        </div>
      }
    </div>
  );
}
