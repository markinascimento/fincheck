export interface BankAccountDTO {
  id: string;
  name: string;
  color: string;
  initialBalance: number;
  currentBalance: number;
  type: 'INVESTMENT' | 'CHECKING' | 'CASH';
}
