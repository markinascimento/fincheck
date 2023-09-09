import { sleep } from '../../utils/sleep';
import { httpClient } from '../HttpClient';

interface MeResponse {
  name: string;
  email: string;
}

export async function me() {
  await sleep(1500);
  const { data } = await httpClient.get<MeResponse>('/users/me');
  return data;
}
