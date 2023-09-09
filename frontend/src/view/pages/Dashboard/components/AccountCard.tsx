import { formatCurrency } from '../../../../app/utils/formatCurrency';

import { BankAccountTypeIcon } from '../../../../assets/icons/BankAccountTypeIcon';

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
}

export function AccountCard({ color, name, balance  }: AccountCardProps) {

  return (
    <div
      className="flex flex-col justify-between p-4 bg-white rounded-2xl h-[200px] border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type='CHECKING' />

        <span className='text-gray-800 font-medium tracking-[-0.5px] mt-2 block'>
          {name}
        </span>
      </div>

      <div>
        <span className='text-gray-800 font-medium tracking-[-0.5px] block'>
          {formatCurrency(balance)}
        </span>
        <small className='text-gray-600 text-sm'> Saldo atual </small>
      </div>
    </div>
  );
}
