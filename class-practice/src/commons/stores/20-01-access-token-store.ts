import { create } from 'zustand';

export const useAccessTokenStore = create((set) => {
  return {
    accsessToken: '',
    setAccessToken: (로그인토큰) => {
      set(() => ({ accessToken: 로그인토큰 }));
    },
  };
});
