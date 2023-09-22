// -> Icon lib
import { ExitIcon } from '@radix-ui/react-icons';

// -> ContextAPI
import { useAuth } from '../../app/hooks/useAuth';

// -> Components
import { DropdownMenu } from './DropdownMenu';

export function UserMenu() {
  const { signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-teal-0 w-12 h-12 rounded-full flex items-center justify-center border border-teal-200 cursor-pointer">
          <span className="tx-sm text-teal-900 font-semibold tracking-[-0.5px]"> MA </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className='w-32 mt-1'>
        <DropdownMenu.Item onSelect={signout} className='flex items-center justify-between gap-1'>
          Sair
          <ExitIcon className='w-3 h-3' />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
