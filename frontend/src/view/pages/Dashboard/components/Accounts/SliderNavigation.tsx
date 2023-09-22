// -> Lib Swipper
import { useSwiper } from 'swiper/react';

// -> Lib Icons
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

// ->
interface SliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function SliderNavigation({ isBeginning, isEnd }: SliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div>
      <button
        disabled={isBeginning}
        onClick={() => swiper.slidePrev()}
        className='py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40'
      >
        <ChevronLeftIcon className='text-white w-6 h-6' />
      </button>
      <button
        disabled={isEnd}
        onClick={() => swiper.slideNext()}
        className='py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40'
      >
        <ChevronRightIcon className='text-white w-6 h-6' />
      </button>
    </div>
  );
}
