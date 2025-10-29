'use client';
import { useState } from 'react';
// import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';

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
const 나의그래프큐엘수정세팅 = gql`
  # 변수의 타입 적는 곳
  mutation updateBoard(
    $mynumber: Int
    $mywriter: String
    $mytitle: String
    $mycontent: String
  ) {
    # 실제 전달할 변수 적는 곳
    updateBoard(
      number: $mynumber
      writer: $mywriter
      title: $mytitle
      contents: $mycontent
    ) {
      number
      message
    }
  }
`;
const FETCH_ROARD = gql`
  query fetchBoard($qqq: Int) {
    fetchBoard(number: $qqq) {
      number
      writer
      title
      contents
    }
  }
`;
export default function BoardWrite(props) {
  const 내주소변수 = useParams();
  const router = useRouter();
  const [mywriterInput, setMywriterInput] = useState('');
  const [mytitleInput, setMytitleInput] = useState('');
  const [mycontentInput, setMycontentInput] = useState('');

  const [게시글등록API요청함수] = useMutation(나의그래프큐엘세팅);
  const [게시글수정API요청함수] = useMutation(나의그래프큐엘수정세팅);

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
    router.push(`/section09/09-02-boards/${result.data.createBoard.number}`);
  };
  //컴포넌트 안에서 동적라우팅의 [변수]를 사용하는 경우에는 주의할 것. => import될 페이지에서만 변수를 사용할 수 있기 때문에
  const onClickUpdate = async () => {
    const result = await 게시글수정API요청함수({
      variables: {
        // variables : $ 역할을 함
        //graphql 변수 : state 변수
        mynumber: Number(내주소변수.number),
        mywriter: mywriterInput,
        mytitle: mytitleInput,
        mycontent: mycontentInput,
      },
      refetchQueries: [
        { query: FETCH_ROARD, variables: { qqq: Number(내주소변수.number) } },
      ],
    });

    console.log(result);
    router.push(`/section09/09-02-boards/${result.data.updateBoard.number}`);
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
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        게시글{props.isEdit ? '수정' : '등록'}하기
      </button>
    </>
  );
}
