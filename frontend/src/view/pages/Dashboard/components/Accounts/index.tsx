// -> Swipper lib
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// -> Custom hooks
import { useAccountController } from './useAccountController';

// -> Utils
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';

// -> Components
import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { Spinner } from '../../../../components/Spinner';

// -> Icons
import { EyeIcon } from '../../../../../assets/icons/EyeIcon';
import { PlusIcon } from '@radix-ui/react-icons';

export function Accounts() {
  const {
    width,
    loading,
    accounts,
    sliderState,
    currentBalance,
    areValuesVisible,
    setSLiderState,
    openNewAccountModal,
    toggleValueVisibility,
  } = useAccountController();

  return (
    <div className="bg-teal-900 h-full w-full rounded-xl px-4 py-8 md:p-10 flex flex-col">
      {loading && (
        <div className='flex items-center justify-center h-full w-full'>
          <Spinner className='text-teal-950 fill-white opacity-50 md:h-20 md:w-20'/>
        </div>
      )}

      {!loading && (
        <>
          <>
            <span className="text-white tracking-[-0.5px] block"> Saldo total </span>

            <div className='flex items-center gap-2'>
              <strong className={cn(
                'text-2xl text-white tracking-[-1px]',
                !areValuesVisible && 'blur-md'
              )}>
                {formatCurrency(currentBalance)}
              </strong>

              <button onClick={toggleValueVisibility} className='flex items-center justify-center h-8 w-8'>
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </>

          <div className='flex flex-col flex-1 justify-end mt-10 md:mt-0'>
            {accounts.length === 0 && (
              <>
                <div className='mb-4' slot='container-start'>
                  <strong className='text-white tracking-[-1px] text-xl font-bold'>
                      Minhas contas
                  </strong>
                </div>

                <button
                  onClick={openNewAccountModal}
                  className='flex flex-col items-center justify-center mt-4 h-52 rounded-2xl border-2 border-dotted border-teal-600
                  gap-4 text-white'
                >
                  <div className='w-11 h-11 rounded-full flex items-center justify-center border-dotted border-2 border-white'>
                    <PlusIcon className='w-6 h-6'/>
                  </div>
                  <span className='font-medium tracking-[-0.5px] block text-center w-32'>
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={width >= 500 ? 2.1: 1.1}
                  onSlideChange={swiper => (
                    setSLiderState({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd })
                  )}
                >
                  <div className='flex items-center justify-between mb-4' slot='container-start'>
                    <strong className='text-white tracking-[-1px] text-xl font-bold'>
                      Minhas contas
                    </strong>
                    <SliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd} />
                  </div>

                  {accounts.map((account) => (
                    <SwiperSlide key={account.id}>
                      <AccountCard data={account} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
