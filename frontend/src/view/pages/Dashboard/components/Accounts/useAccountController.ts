// -> ReactJS
import { useMemo, useState } from 'react';

// -> Custom Hooks
import { useDashboard } from '../../context/useDashboard';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useQuery } from '@tanstack/react-query';
import { bankAccountService } from '../../../../../app/services/bankAccountService';

export function useAccountController() {
  const {
    areValuesVisible,
    toggleValueVisibility,
    openNewAccountModal,
  } = useDashboard();

  const { width } = useWindowWidth();

  const [sliderState, setSLiderState] = useState({
    isBeginning: true,
    isEnd: false
  });

  const { data, isFetching } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountService.getAll
  });

  const currentBalance = useMemo(() => {
    if (!data) {
      return 0;
    }

    return data.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);
  }, [data]);

  return {
    width: width,
    loading: isFetching,
    accounts: data ?? [],
    sliderState,
    currentBalance,
    areValuesVisible,
    setSLiderState,
    openNewAccountModal,
    toggleValueVisibility,
  };
}
