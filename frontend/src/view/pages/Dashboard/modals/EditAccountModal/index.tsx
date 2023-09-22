// -> Controller
import { useEditAccountModalController } from './useEditAccountModalController';

// -> Components
import { Modal } from '../../../../components/Modal';
import { Input } from '../../../../components/Input';
import { Select } from '../../../../components/Select';
import { Button } from '../../../../components/Button';
import { InputCurrency } from '../../../../components/InputCurrency';
import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Controller } from 'react-hook-form';

export function EditAccountModal() {
  const {
    errors,
    control,
    isLoading,
    typeAccountOptions,
    isEditAccountModalOpen,
    register,
    handleSubmit,
    closeEditAccountModal
  } = useEditAccountModalController();

  return (
    <Modal title="Editar conta" open={isEditAccountModalOpen} onClose={closeEditAccountModal}>
      <form onSubmit={handleSubmit} className='w-full flex-1 bg'>
        <div>
          <span className='text-gray-600 text-sm'> Saldo inicial </span>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600 tracking-[-0.5px] text-lg'> RS </span>

            <Controller
              control={control}
              name='initalBalance'
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  onChange={onChange}
                  value={value}
                  error={errors.initalBalance?.message}
                />
              )
              }
            />
          </div>
        </div>

        <div className='flex flex-col gap-4 mt-10'>
          <Input
            type='text'
            placeholder='Nome da conta'
            error={errors.name?.message}
            {...register('name')}
          />

          <Controller
            control={control}
            name='type'
            defaultValue='CHECKING'
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder='Tipo'
                onChange={onChange}
                value={value}
                error={errors.type?.message}
                options={typeAccountOptions}
              />
            )}
          />

          <Controller
            control={control}
            name='color'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                onChange={onChange}
                value={value}
                error={errors.color?.message}
              />
            )}
          />

          <Button type='submit' className='w-full mt-6' isLoading={isLoading}>
            Criar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
