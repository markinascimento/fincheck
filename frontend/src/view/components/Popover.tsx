// -> ReactJS
import { ReactNode } from 'react';

// -> Popover lib
import * as RdxPopover from '@radix-ui/react-popover';

// -> Utils
import { cn } from '../../app/utils/cn';

interface PoporverProps{
  children: ReactNode,
  className?: string
  onSelect?: () => void;
}

function PopoverRoot({ children }: PoporverProps) {
  return (
    <RdxPopover.Root>
      {children}
    </RdxPopover.Root>
  );
}

function PopoverTrigger({ children }: PoporverProps) {
  return (
    <RdxPopover.Trigger asChild>
      {children}
    </RdxPopover.Trigger>
  );
}

function PopoverContent({ children, className }: PoporverProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          'p-4 bg-white rounded-2xl space-y-2 z-50 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          'data-[side=bottom]:animate-slide-up-and-fade',
          'data-[side=top]:animate-slide-up-and-fade',
          className
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent
};

