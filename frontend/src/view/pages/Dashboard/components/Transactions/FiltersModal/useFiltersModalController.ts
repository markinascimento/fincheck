// -> ReactJS
import { useState } from 'react';

export function useFiltersModalController() {
  const [selectedBankAccountID, setSelectedBankAccountID] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

  function handleSelectBankAccount (bankAccountID: string) {
    setSelectedBankAccountID((prevState) => {
      return prevState === bankAccountID ? null : bankAccountID;
    });
  }

  function handleChangeYear(step: number) {
    setSelectedYear((prevState) => {
      return prevState + step;
    });
  }

  function handleApplyFilters () {
    alert(`${selectedBankAccountID} - ${selectedYear}`);
  }

  return {
    selectedYear,
    selectedBankAccountID,
    handleChangeYear,
    handleApplyFilters,
    handleSelectBankAccount,
  };
}
