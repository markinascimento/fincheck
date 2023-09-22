// -> Validation lib
import { z } from 'zod';

// -> Custom Hooks
import { useDashboard } from '../../context/useDashboard';

// -> API

// -> Utils



import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bankAccountService } from '../../../../../app/services/bankAccountService';
import { currencyStringToNumber } from '../../../../../app/utils/currencyStringToNumber';
import toast from 'react-hot-toast';

const schema = z.object({
  initalBalance: z.string().nonempty('Salvo inicial é obrigatório'),
  name: z.string().nonempty('Nome da conta é obrigatório'),
  type: z.enum(['INVESTMENT', 'CHECKING', 'CASH']),
  color: z.string().nonempty('Cor é obrigatória')
});

type FormData = z.infer<typeof schema>;

export default function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();

  const {
    control,
    reset,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();
  const { isLoading, mutateAsync } = useMutation(bankAccountService.create);

  const typeAccountOptions = [
    {
      label: 'Investimento',
      value: 'INVESTMENT'
    },
    {
      label: 'Conta Corrente',
      value: 'CHECKING'
    },
    {
      label: 'Dinheiro Físico',
      value: 'CASH'
    },
  ];

  const handleSubmit = hookFormSubmit(async (data: FormData) => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: currencyStringToNumber(data.initalBalance)
      });

      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success('Conta cadastrada com sucesso!');
      closeNewAccountModal();
      reset();

    } catch {
      toast.error('Error ao cadastrar a conta');
    }
  });

  return {
    errors,
    control,
    isLoading,
    typeAccountOptions,
    isNewAccountModalOpen,
    register,
    handleSubmit,
    closeNewAccountModal,
  };
}
