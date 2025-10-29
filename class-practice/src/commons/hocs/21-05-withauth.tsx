import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const withAuth = (컴포넌트) => () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      alert('로그인 후 이용 가능합니다.');
      router.push('/section21/21-05-login-localstorge-check-hoc');
    }
  }, []);

  return <컴포넌트 />;
};
