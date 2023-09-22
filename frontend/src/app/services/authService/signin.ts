import { httpClient } from '../HttpClient';

export interface SigninProps {
  email: string
  password: string;
}

interface SinginResponse {
  accessToken: string;
}

export async function signin(params: SigninProps) {
  const { data } = await httpClient.post<SinginResponse>('/auth/signin', params);

  return data;
}
