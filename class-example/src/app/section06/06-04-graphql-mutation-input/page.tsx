'use client';
import { useState } from 'react';
// import React from 'react';
import { gql, useMutation } from '@apollo/client';

const 나의그래프큐엘세팅 = gql`
  # 변수의 타입 적는 곳
  mutation createBoard(
    $mywriter: String
    $mytitle: String
    $mycontent: String
  ) {
    # 실제 전달할 변수 적는 곳
    createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [mywriterInput, setMywriterInput] = useState('');
  const [mytitleInput, setMytitleInput] = useState('');
  const [mycontentInput, setMycontentInput] = useState('');

  const [게시글등록API요청함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    const result = await 게시글등록API요청함수({
      variables: {
        // variables : $ 역할을 함
        //graphql 변수 : state 변수
        mywriter: mywriterInput,
        mytitle: mytitleInput,
        mycontent: mycontentInput,
      },
    });

    console.log(result);
  };

  const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMywriterInput(event.target.value);
  };
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMytitleInput(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMycontentInput(event.target.value);
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContent} />
      <br />
      <button onClick={onClickSubmit}>게시글등록하기</button>
    </>
  );
}
