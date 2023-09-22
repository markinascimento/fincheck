// -> Icons lib
import { ChevronDownIcon } from '@radix-ui/react-icons';

// -> Components
import { DropdownMenu } from '../../../../components/DropdownMenu';

// -> Icons
import { TransactionIcon } from '../../../../../assets/icons/TransactionIcon';
import IncomeIcon from '../../../../../assets/icons/IncomeIcon';
import { ExpensesIcon } from '../../../../../assets/icons/ExpensesIcon';

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className='flex items-center gap-2'>
          <TransactionIcon />
          <span className='text-sm text-gray-800 font-medium tracking-[-0.5px]'> Transações </span>
          <ChevronDownIcon className='text-gray-900 mt-[-2px]'/>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className='w-[279px]'>
        <DropdownMenu.Item className='gap-2'>
          <IncomeIcon />
          Receitas
        </DropdownMenu.Item>

        <DropdownMenu.Item className='gap-2'>
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>

        <DropdownMenu.Item className='gap-2'>
          <TransactionIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
