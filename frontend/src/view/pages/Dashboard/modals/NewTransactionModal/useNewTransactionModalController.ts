// -> Custom Hooks
import { useDashboard } from '../../context/useDashboard';

export function useNewTransactionModalController() {
  const {
    newTransactionType,
    isNewTransactionModalOpen,
    closeNewTransactionModal
  } = useDashboard();

  const typeAccountOptions = [
    {
      label: 'Investimento',
      value: 'INVESTMENT'
    },
    {
      label: 'Conta Corrente',
      value: 'CHECKING'
    },
    {
      label: 'Dinheiro Físico',
      value: 'CASH'
    },
  ];

  return { newTransactionType, isNewTransactionModalOpen, typeAccountOptions, closeNewTransactionModal };
}

