// -> ReactJS
import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';

// -> Http lib
import { useQuery } from '@tanstack/react-query';

// -> localStorage file
import { localStorageKeys } from '../ config/localStorageKeys';
import { usersService } from '../services/usersService';
import { toast } from 'react-hot-toast';
import { LaunchScreen } from '../../view/components/LaunchScreen';

interface AuthContextValue {
  signedIn: boolean;
  signin: (accessToken: string) => void;
  signout: () => void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken =  localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess, remove } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity
  });

  const signin = useCallback((acessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, acessToken);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    remove();

    setSignedIn(false);
  }, []);

  useEffect(() => {
    if(isError) {
      toast.error('Sua sessão expirou!');
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signin,
        signout
      }}
    >
      <LaunchScreen isLoading={isFetching} />

      {!isFetching && children}
    </AuthContext.Provider>
  );
}


