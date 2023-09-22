// -> ReactJS
import { useState } from 'react';

// -> Custom Hooks
import { useDashboard } from '../../context/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

  function handleOpenFiltersModal() {
    setIsFilterModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFilterModalOpen(false);
  }


  return {
    loading: false,
    transactions: [],
    initialLoading: false,
    isFiltersModalOpen,
    areValuesVisible,
    handleOpenFiltersModal,
    handleCloseFiltersModal
  };
}
