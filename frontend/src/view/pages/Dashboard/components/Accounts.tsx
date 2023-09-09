// -> Lib Icons
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

// -> Utils
import { formatCurrency } from '../../../../app/utils/formatCurrency';

// -> Icons
import { EyeIcon } from '../../../../assets/icons/EyeIcon';

// -> Components
import { AccountCard } from './AccountCard';

export function Accounts() {
  return (
    <div className="bg-teal-900 h-full w-full rounded-xl px-4 py-8 md:p-10 flex flex-col">
      <div>
        <span className="text-white tracking-[-0.5px] block"> Saldo total </span>

        <div className='flex items-center gap-2'>
          <strong className="text-2xl text-white tracking-[-1px]">
            {formatCurrency(10000)}
          </strong>

          <button className='flex items-center justify-center h-8 w-8'>
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className='flex flex-col flex-1 justify-end'>
        <div className='flex items-center justify-between'>
          <strong className='text-white text-lg tracking-[-1px]'>
            Minhas contas
          </strong>

          <div className=''>
            <button
              className='py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40'
            >
              <ChevronLeftIcon className='text-white w-6 h-6' />
            </button>
            <button
              className='py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40'
            >
              <ChevronRightIcon className='text-white w-6 h-6' />
            </button>
          </div>
        </div>

        <div className='mt-4'>
          <AccountCard balance={1000} color='#7950F2' name='Nubank' />
        </div>
      </div>
    </div>
  );
}
