// -> Custom Hooks
import { useTransactionsController } from './useTransactionsController';

// -> Utils
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';

// -> Icons
import { CategoryIcon } from '../../../../../assets/icons/categories/CategoryIcon';


// -> Types component
interface TransactionCardProps {
  type: 'expense' | 'income',
  value: number;
  title: string;
}

export function TransactionCard({ type, value, title }: TransactionCardProps) {
  const { areValuesVisible } = useTransactionsController();

  return (
    <div className='flex items-center justify-between bg-white p-6 rounded-2xl gap-4'>
      <div className='flex flex-1 items-center gap-2'>
        <CategoryIcon type={type} />
        <div>
          <strong className='text-gray-900 tracking-[-0.5px] block'> {title} </strong>
          <small className='text-gray-600'> 04/06/2023 </small>
        </div>
      </div>

      <span className={cn(
        'font-semibold tracking-[-0.5px]',
        !areValuesVisible && 'blur-sm',
        type == 'income' ? 'text-green-800' : 'text-red-800',
      )}>
        {formatCurrency(value)}
      </span>
    </div>
  );
}
