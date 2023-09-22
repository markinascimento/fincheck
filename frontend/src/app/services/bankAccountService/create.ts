import { httpClient } from '../HttpClient';

export interface bankAccountServiceProps {
  name: string
  initialBalance: number;
  color: string;
  type: 'INVESTMENT' | 'CHECKING' | 'CASH';
}

export async function create(params: bankAccountServiceProps) {
  const { data } = await httpClient.post('/bank-accounts', params);

  return data;
}
