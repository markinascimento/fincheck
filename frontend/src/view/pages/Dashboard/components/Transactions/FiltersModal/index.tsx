// -> Icons lib
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

// -> Controller
import { useFiltersModalController } from './useFiltersModalController';

// -> Components
import { Modal } from '../../../../../components/Modal';
import { Button } from '../../../../../components/Button';
import { cn } from '../../../../../../app/utils/cn';

interface FiltersModalProps{
  open: boolean;
  onClose(): void;
}

const mockedAccount = [
  {
    id: '123',
    name: 'XP Investimentos'
  },
  {
    id: '321',
    name: 'NuBank'
  },
  {
    id: '212',
    name: 'Dinheiro'
  },
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const {
    selectedYear,
    selectedBankAccountID,
    handleChangeYear,
    handleApplyFilters,
    handleSelectBankAccount,
  } = useFiltersModalController();

  return (
    <Modal open={open} onClose={onClose} title="Filtros">
      <div className='mb-10'>
        <strong className='text-lg text-gray-800 tracking-[-0.5px]'> Conta </strong>
        <div className='space-y-2 mt-2'>
          {mockedAccount.map((bankAccount) => (
            <button
              key={bankAccount.id}
              onClick={() => handleSelectBankAccount(bankAccount.id)}
              className={cn(
                'p-2 text-gray-800 rounded-2xl w-full text-left hover:bg-gray-50 transition-colors',
                bankAccount.id === selectedBankAccountID && '!bg-gray-200'
              )}
            >
              {bankAccount.name}
            </button>
          ))}
        </div>
      </div>

      <div className='mb-10'>
        <strong className='text-lg text-gray-800 tracking-[-0.5px]'> Ano </strong>

        <div className='mt-2 w-52 flex items-center justify-between text-gray-800'>
          <button onClick={() => handleChangeYear(-1)} className='w-12 h-12 flex items-center justify-center'>
            <ChevronLeftIcon className='w-6 h-6' />
          </button>

          <div className='flex-1 text-center'>
            <span className='text-sm font-medium'> {selectedYear} </span>
          </div>

          <button onClick={() => handleChangeYear(+1)} className='w-12 h-12 flex items-center justify-center'>
            <ChevronRightIcon className='w-6 h-6' />
          </button>
        </div>
      </div>

      <Button onClick={handleApplyFilters} className='w-full'>
        Aplicar filtros
      </Button>
    </Modal>
  );
}
