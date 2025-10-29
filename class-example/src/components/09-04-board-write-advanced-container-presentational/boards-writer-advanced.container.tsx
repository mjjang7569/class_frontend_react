'use client';
import { useState } from 'react';
// import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import BoardtWriteAdvancedUI from './boards-writer-advanced.presenter';
import {
  FETCH_ROARD,
  나의그래프큐엘세팅,
  나의그래프큐엘수정세팅,
} from './boards-writer-advanced.queries';

export default function BoardtWriteAdvanced(props) {
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
    router.push(
      `/section09/09-03-boards-advanced/${result.data.createBoard.number}`
    );
  };
  //컴포넌트 안에서 동적라우팅의 [변수]를 사용하는 경우에는 주의할 것. => import될 페이지에서만 변수를 사용할 수 있기 때문에
  const onClickUpdate = async () => {
    const myvariables = {
      mynumber: Number(내주소변수.number),
    };
    if (mywriterInput) myvariables.mywriter = mywriterInput;
    if (mytitleInput) myvariables.mytitle = mytitleInput;
    if (mycontentInput) myvariables.mycontent = mycontentInput;
    const result = await 게시글수정API요청함수({
      variables: myvariables,
      refetchQueries: [
        { query: FETCH_ROARD, variables: { qqq: Number(내주소변수.number) } },
      ],
    });

    console.log(result);
    router.push(
      `/section09/09-03-boards-advanced/${result.data.updateBoard.number}`
    );
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
      <div>이 텍스트는 컨테이너 컴포넌트의 것 입니다.</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것 입니다.</div>
      <BoardtWriteAdvancedUI
        작성자변경기능={onChangeWriter}
        제목변경기능={onChangeTitle}
        내용변경기능={onChangeContent}
        onClickUpdate={onClickUpdate}
        onClickSubmit={onClickSubmit}
        isEdit={props.isEdit}
        data={props.data}
      />
      ;<div>이 텍스트는 컨테이너 컴포넌트의 것 입니다.</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것 입니다.</div>
    </>
  );
}
