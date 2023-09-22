import { BankAccountDTO } from '../../entities/BankAccount';
import { httpClient } from '../HttpClient';

type BankAccountResponse = BankAccountDTO[];

export async function getAll() {
  const { data } = await httpClient.get<BankAccountResponse>('/bank-accounts');

  return data;
}
