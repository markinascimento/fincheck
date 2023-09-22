// -> ReactJS
import { ReactNode } from 'react';

// -> Dropdown lib
import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';

// -> Utils
import { cn } from '../../app/utils/cn';

interface DropdownMenuProps{
  children: ReactNode,
  className?: string
  onSelect?: () => void;
}

function DropdownMenuRoot({ children }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  );
}

function DropdownMenuTrigger({ children, className }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Trigger
      asChild
      className={cn(
        'outline-none',
        className
      )}
    >
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

function DropdownMenuContent({ children, className }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          'p-4 bg-white rounded-2xl space-y-2 z-50 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          'data-[side=bottom]:animate-slide-up-and-fade',
          'data-[side=top]:animate-slide-up-and-fade',
          className
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

function DropdownMenuItem({ children, className, onSelect }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'min-h-[40px] outline-none flex items-center py-2 px-4 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl transition-colors duration-100 cursor-pointer',
        className
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem
};
