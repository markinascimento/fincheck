// -> Routing
import { Link } from 'react-router-dom';

// -> Custom hooks
import { useRegisterController } from './useRegisterController';

// -> Components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register() {
  const {
    errors,
    isLoading,
    register,
    handleSubmit,
  } = useRegisterController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900"> Crie sua conta </h1>

        <p className='space-x-1'>
          <span className='text-gray-700 tracking-[-0.5px]'> Já possui uma conta? </span>
          <Link to="/login" className='text-teal-900 font-medium tracking-[-0.5px]'> Fazer login </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className='mt-[60px] flex flex-col gap-4'>
        <Input
          placeholder='Nome'
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          type='email'
          placeholder='E-mail'
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          type='password'
          placeholder='Senha'
          error={errors.password?.message}
          {...register('password')}
        />

        <Button type='submit' className='mt-2' isLoading={isLoading}>
          Criar conta
        </Button>
      </form>
    </>
  );
}
