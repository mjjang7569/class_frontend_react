'use client';

// import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

const 나의그래프큐엘세팅 = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕!", contents: "화이팅") {
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const router = useRouter();

  const [게시글등록API요청함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    try {
      const result = await 게시글등록API요청함수();

      console.log(result);
      console.log(result.data.createBoard.number);

      router.push(
        `/section07/07-04-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error);
    } finally {
      //무조건 마지막에 실행되는 부분
    }
  };
  return <button onClick={onClickSubmit}>게시글등록하기</button>;
}
