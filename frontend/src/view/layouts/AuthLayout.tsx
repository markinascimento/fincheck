// -> Routing
import { Outlet } from 'react-router-dom';

// -> Components
import { Logo } from '../components/Logo';

// -> Images
import illustrationIMG from '../../assets/login.png';

export function AuthLayout() {
  return (
    <div className='flex w-full h-full'>
      <div className='w-full h-full flex flex-col justify-center items-center gap-16 lg:w-1/2'>
        <Logo className='text-gray-500 h-6' />
        <div className='w-full max-w-[504px] px-4'>
          <Outlet />
        </div>
      </div>

      <div className='w-1/2 h-full justify-center items-center p-8 relative hidden lg:flex'>
        <img src={illustrationIMG} className='object-cover w-full h-full max-w-[656px] select-none rounded-[32px]' />

        <div className='max-w-[656px] w-full bottom-0 bg-transparent p-10 absolute rounded-b-[32px] mx-8'>
          <Logo className='text-teal-900 h-8' />
          <p className='text-gray-700 font-medium text-xl mt-2'>
            Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
