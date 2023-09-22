// -> Context
import { DashboardProvider } from './context';

// -> Components
import { Fab } from './components/Fab';
import { Accounts } from './components/Accounts';
import { UserMenu } from '../../components/UserMenu';
import { Transactions } from './components/Transactions';
import { NewAccountModal } from './modals/NewAccountModal';
import { EditAccountModal } from './modals/EditAccountModal';
import { NewTransactionModal } from './modals/NewTransactionModal';

// -> Logos
import { Logo } from '../../components/Logo';

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className='flex flex-col h-full w-full gap-4 p-4 md:p-6 '>
        <header className="flex items-center justify-between h-12">
          <Logo className='h-6 text-teal-900'/>
          <UserMenu />
        </header>

        <main className="flex flex-col flex-1 gap-4 max-h-full md:flex-row">
          <div className='w-full  md:w-1/2'>
            <Accounts />
          </div>

          <div className='w-full  md:w-1/2'>
            <Transactions />
          </div>
        </main>

        <Fab />
        <NewAccountModal />
        <NewTransactionModal />
        <EditAccountModal />
      </div>
    </DashboardProvider>
  );
}
