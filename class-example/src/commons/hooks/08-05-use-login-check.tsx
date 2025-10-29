import { useRouter } from 'next/navigation';

export const useLoginCheck = () => {
  const router = useRouter();

  const loginCheck기능 = () => {
    //1.로그인 검증하기

    //2.로그인 검증 실패 처리
    alert('로그인을 먼저 해주세요');
    router.push('');
  };
  return {
    loginCheck: loginCheck기능,
  };
};
  