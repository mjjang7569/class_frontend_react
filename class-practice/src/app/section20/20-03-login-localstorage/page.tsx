'use client';

import { useAccessTokenStore } from '@/commons/stores/20-01-access-token-store';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const { setAccessToken } = useAccessTokenStore();
  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      const myaccessToken = result.data?.loginUser.accessToken;
      console.log(myaccessToken);

      setAccessToken(myaccessToken);
      //임시 사용(나중에 refreshToken으로 사용
      localStorage.setItem('accessToken', myaccessToken);

      router.push('/section20/20-03-login-localstorage-success');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
