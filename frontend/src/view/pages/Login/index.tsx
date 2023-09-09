// -> Routing
import { Link } from 'react-router-dom';

// -> Custom hooks
import { useLoginController } from './useLoginController';

// -> Components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Login() {
  const {
    errors,
    isLoading,
    register,
    handleSubmit,
  } = useLoginController();

  return (
    <>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900"> Entre em sua conta </h1>

        <p className='space-x-1'>
          <span className='text-gray-700 tracking-[-0.5px]'> Novo por aqui? </span>
          <Link to="/register" className='text-teal-900 font-medium tracking-[-0.5px]'> Crie uma conta </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className='mt-[60px] flex flex-col gap-4'>
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

        <Button type='submit' className='mt-4' isLoading={isLoading}>
          Entrar
        </Button>
      </form>
    </>
  );
}
