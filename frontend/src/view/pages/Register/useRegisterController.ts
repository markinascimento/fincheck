// -> Http lib
import { useMutation } from '@tanstack/react-query';

// -> Input lib
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// -> Validation lib
import { z } from 'zod';

// -> Toast lib
import { toast } from 'react-hot-toast';

// -> ContextAPI
import { useAuth } from '../../../app/hooks/useAuth';

// -> API
import { authService } from '../../../app/services/authService';
import { SignupParams } from '../../../app/services/authService/signup';

const schema = z.object({
  name: z.string()
    .nonempty('Nome é obrigatório'),

  email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),

  password: z.string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve conter pelo menos 8 digítos')
});

type FormData = z.infer<typeof schema>

export function useRegisterController() {
  const {
    register,
    formState: { errors },
    handleSubmit: hookFormSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);

    } catch {
      toast.error('Ocorreu um erro ao criar a conta');
    }
  });

  return {
    errors,
    isLoading,
    register,
    handleSubmit,
  };
}


