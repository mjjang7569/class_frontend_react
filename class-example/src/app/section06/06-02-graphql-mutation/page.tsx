'use client';

// import React from 'react';
import { gql, useMutation } from '@apollo/client';

const 나의그래프큐엘세팅 = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕!", contents: "화이팅") {
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [게시글등록API요청함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    const result = await 게시글등록API요청함수();

    console.log(result);
  };
  return <button onClick={onClickSubmit}>Graph-ql-API-요청하기</button>;
}
