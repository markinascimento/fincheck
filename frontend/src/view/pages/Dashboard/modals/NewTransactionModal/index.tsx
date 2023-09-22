// -> Controller
import { useNewTransactionModalController } from './useNewTransactionModalController';

// -> Components
import { Modal } from '../../../../components/Modal';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Input } from '../../../../components/Input';
import { Select } from '../../../../components/Select';
import { DataPickerInput } from '../../../../components/DataPickerInput';
import { Button } from '../../../../components/Button';


export function NewTransactionModal() {
  const {
    typeAccountOptions,
    newTransactionType,
    isNewTransactionModalOpen,
    closeNewTransactionModal
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form action="" className='w-full flex-1 bg'>
        <div>
          <span className='text-gray-600 text-sm'>
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600 tracking-[-0.5px] text-lg'> RS </span>
            <InputCurrency />
          </div>
        </div>

        <div className='flex flex-col gap-4 mt-10'>
          <Input
            type='text'
            name="name"
            placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
          />


          <Select
            placeholder='Categoria'
            options={typeAccountOptions}
          />

          <Select
            placeholder={isExpense ? 'Pagar com' : 'Receber com'}
            options={typeAccountOptions}
          />

          <DataPickerInput />

          <Button> Criar </Button>
        </div>
      </form>
    </Modal>
  );
}
