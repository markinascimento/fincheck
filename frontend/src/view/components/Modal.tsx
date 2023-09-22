// -> ReactJS
import { ReactNode } from 'react';

// -> Modal lib
import * as RdxDialog from '@radix-ui/react-dialog';

// -> Icons lib
import { Cross2Icon } from '@radix-ui/react-icons';

// -> Utils
import { cn } from '../../app/utils/cn';

// -> Types component
interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  rightAction?: ReactNode;
  onClose(): void;
}

export function Modal({ open, title, children, rightAction, onClose }: ModalProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay className={cn(
          'fixed inset-0 bg-black/80 backdrop-blur-md z-10',
          'data-[state=open]:animate-overlay-show'
        )}/>

        <RdxDialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-6 space-y-10 rounded-2xl shadow-[0_11px_20px_0px_rgba(0,0,0,0.40)] w-full max-w-[400px] outline-none',
            'data-[state=open]:animate-content-show'
          )}
        >
          <header className="flex items-center justify-between h-12 text-gray-800">
            <button onClick={onClose} className='flex items-center justify-center w-12 h-12 outline-none'>
              <Cross2Icon className='w-5 h-5' />
            </button>

            <span className='text-lg font-bold tracking-[-0.4px]'> {title} </span>

            <div className='flex items-center justify-center w-12 h-12'>
              {rightAction}
            </div>
          </header>

          <div>
            {children}
          </div>
        </RdxDialog.Content>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}
