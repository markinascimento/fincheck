// -> Lib Swiper
import { useSwiper } from 'swiper/react';

// -> Utils
import { cn } from '../../../../../app/utils/cn';

// -> Types component
interface SliderOptionsProps {
  isActive: boolean;
  month: string;
  index: number
}

export function SliderOptions({ isActive, month, index }: SliderOptionsProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        'w-full rounded-full h-12 font-medium text-gray-900',
        isActive && 'bg-white'
      )}
    >
      <small> {month} </small>
    </button>
  );
}
