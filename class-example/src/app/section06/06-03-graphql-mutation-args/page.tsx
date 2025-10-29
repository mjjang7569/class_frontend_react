'use client';

// import React from 'react';
import { gql, useMutation } from '@apollo/client';

const 나의그래프큐엘세팅 = gql`
  # 변수의 타입 적는 곳
  mutation createBoard(
    $mywriter: String
    $mytitle: String
    $mycontents: String
  ) {
    # 실제 전달할 변수 적는 곳
    createBoard(writer: $mywriter, title: $mytitle, contents: $mycontents) {
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [게시글등록API요청함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    const result = await 게시글등록API요청함수({
      variables: {
        // variables : $ 역할을 함
        mywriter: '훈이',
        mytitle: '안녕하세요',
        mycontents: '배부릅니다',
      },
    });

    console.log(result);
  };
  return <button onClick={onClickSubmit}>Graph-ql-API-요청하기</button>;
}
