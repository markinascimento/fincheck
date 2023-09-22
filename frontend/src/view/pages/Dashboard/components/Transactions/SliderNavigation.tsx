// -> Lib Swiper
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className='absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent to-gray-100 h-12 w-12 z-10 flex items-center justify-center'
      >
        <ChevronLeftIcon className='text-gray-800 w-6 h-6' />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className='absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-gray-100 to-transparent h-12 w-12 z-10 flex items-center justify-center'
      >
        <ChevronRightIcon className='text-gray-800 w-6 h-6' />
      </button>
    </>
  );
}
