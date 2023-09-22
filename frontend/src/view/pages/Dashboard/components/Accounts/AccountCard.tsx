// -> Utils
import { BankAccountDTO } from '../../../../../app/entities/BankAccount';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';

// -> Icons
import { BankAccountTypeIcon } from '../../../../../assets/icons/BankAccountTypeIcon';
import { useDashboard } from '../../context/useDashboard';

interface AccountCardProps {
  data: BankAccountDTO
}

export function AccountCard({ data }: AccountCardProps) {
  const { color, name, currentBalance, type } = data;

  const { areValuesVisible, openEditAccountModal } = useDashboard();

  return (
    <div
      role='button'
      onClick={() => openEditAccountModal(data)}
      className="flex flex-col justify-between p-4 bg-white rounded-2xl h-[200px] border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />

        <span className='text-gray-800 font-medium tracking-[-0.5px] mt-2 block'>
          {name}
        </span>
      </div>

      <div>
        <span className={cn(
          'text-gray-800 font-medium tracking-[-0.5px] block',
          !areValuesVisible && 'blur-sm'
        )}>
          {formatCurrency(currentBalance)}
        </span>
        <small className='text-gray-600 text-sm'> Saldo atual </small>
      </div>
    </div>
  );
}
