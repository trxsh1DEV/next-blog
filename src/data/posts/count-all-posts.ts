import { API_URL } from '@/config/app-config';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${API_URL}/count?${query}`;
  const numberOfPosts = await fetch(url);
  const data = await numberOfPosts.json();
  return data;
};
