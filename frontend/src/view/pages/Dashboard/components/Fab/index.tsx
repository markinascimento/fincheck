// -> Icons lib
import { PlusIcon } from '@radix-ui/react-icons';

// -> Custom Hooks
import { useDashboard } from '../../context/useDashboard';

// -> Components
import { DropdownMenu } from '../../../../components/DropdownMenu';

// -> Icons
import { BankAccountIcon } from '../../../../../assets/icons/BankAccountIcon';
import { CategoryIcon } from '../../../../../assets/icons/categories/CategoryIcon';

export function Fab() {
  const { openNewAccountModal, openNewTransactionModal } = useDashboard();

  return (
    <div className='fixed bottom-4 right-4 z-10'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className=' w-12 h-12 flex items-center justify-center rounded-full bg-teal-900 text-white'>
            <PlusIcon className='w-6 h-6' />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item className='gap-2' onSelect={() => openNewTransactionModal('EXPENSE')}>
            <CategoryIcon type='expense' />
            Nova Despesa
          </DropdownMenu.Item>

          <DropdownMenu.Item className='gap-2' onSelect={() => openNewTransactionModal('INCOME')}>
            <CategoryIcon type='income' />
            Nova Receita
          </DropdownMenu.Item>

          <DropdownMenu.Item className='gap-2' onSelect={openNewAccountModal}>
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
