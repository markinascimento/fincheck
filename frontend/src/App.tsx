// -> Http lib
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// -> ContextAPI
import { AuthProvider } from './app/contexts/AuthContext';

// -> Toaster lib
import { Toaster } from 'react-hot-toast';

// -> Pages
import { Router } from './router';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />

        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}
