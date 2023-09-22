// -> Import ReactJS
import { ReactNode, createContext, useCallback, useState } from 'react';

// -> Intefaces
import { BankAccountDTO } from '../../../../app/entities/BankAccount';

interface DashboardContextProps {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  isEditAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  accountBeingEdited: null | BankAccountDTO;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;

  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  closeEditAccountModal(): void;
  toggleValueVisibility(): void;
  closeNewTransactionModal(): void;
  openEditAccountModal(bankAccount: BankAccountDTO): void;
  openNewTransactionModal(type: 'INCOME' | 'EXPENSE'): void;
}

export const DashboardContext = createContext({} as DashboardContextProps);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const [newTransactionType, setNewTransactionType] = useState<'INCOME' | 'EXPENSE' | null>(null);
  const [accountBeingEdited, setAccountBeingEdited] = useState<null | BankAccountDTO>(null);

  const toggleValueVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  const openEditAccountModal = useCallback((bankAccount: BankAccountDTO) => {
    setIsEditAccountModalOpen(true);
    setAccountBeingEdited(bankAccount);
  }, []);

  const closeEditAccountModal = useCallback(() => {
    setIsEditAccountModalOpen(false);
    setAccountBeingEdited(null);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        newTransactionType,
        accountBeingEdited,
        isNewAccountModalOpen,
        isEditAccountModalOpen,
        isNewTransactionModalOpen,
        openNewAccountModal,
        closeNewAccountModal,
        openEditAccountModal,
        closeEditAccountModal,
        toggleValueVisibility,
        openNewTransactionModal,
        closeNewTransactionModal
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
