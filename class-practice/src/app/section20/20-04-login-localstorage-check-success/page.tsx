'use client';

import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

useEffect(() => {
  if (!localStorage.getItem('accessToken')) {
    alert('로그인 후 이용 가능합니다.');
    router.push('/section20/20-04-login-localstorge-check');
  }
}, []);
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
}
