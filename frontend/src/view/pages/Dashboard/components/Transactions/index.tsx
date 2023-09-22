// -> Lib Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// -> Custom Hooks
import { useTransactionsController } from './useTransactionsController';

// -> Components
import { FiltersModal } from './FiltersModal';
import { SliderOptions } from './SliderOptions';
import { TransactionCard } from './TransactionCard';
import { SliderNavigation } from './SliderNavigation';
import { Spinner } from '../../../../components/Spinner';
import { TransactionTypeDropdown } from './TransactionTypeDropdown';

// ->> Utils
import { MONTHS } from '../../../../../app/ config/constants';

// -> Icons / Images
import emptyState from '../../../../../assets/empty-state.svg';
import { FilterIcon } from '../../../../../assets/icons/FilterIcon';

export function Transactions() {
  const {
    loading,
    transactions,
    initialLoading,
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  } = useTransactionsController();

  const hasTransaction = transactions.length === 0;

  return (
    <div className="bg-gray-100 flex flex-col h-full w-full rounded-xl px-4 py-8 md:p-10">
      {initialLoading && (
        <div className='flex items-center justify-center h-full'>
          <Spinner className='text-teal-950 fill-white opacity-50 md:h-20 md:w-20'/>
        </div>
      )}

      {!initialLoading && (
        <>
          <FiltersModal open={isFiltersModalOpen} onClose={handleCloseFiltersModal} />

          <header>
            <div className='flex items-center justify-between'>
              <TransactionTypeDropdown />

              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>

            <div className='mt-6 relative'>
              <Swiper
                slidesPerView={3}
                centeredSlides
              >
                <SliderNavigation />
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOptions isActive={isActive} month={month} index={index} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <div className="flex-1 mt-4 space-y-2 overflow-y-auto">
            {loading && (
              <div className='flex flex-col h-full items-center justify-center gap-4'>
                <Spinner className='w-10 h-10 md:h-20 md:w-20'/>
              </div>
            )}

            {(!hasTransaction && !loading ) && (
              <div className='flex flex-col h-full items-center justify-center gap-4'>
                <img src={emptyState} />
                <span className='text-gray-600'> Não encontramos nenhuma transação! </span>

              </div>
            )}

            {(hasTransaction && !loading) && (
              transactions.map((transaction) => (
                <TransactionCard key={transaction} type='income' title='Salário' value={1000} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
