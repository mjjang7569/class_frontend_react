'use client';
import { useState } from 'react';
// import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import BoardtWriteAdvancedUI from '.';
import {
  FETCH_ROARD,
  나의그래프큐엘세팅,
  나의그래프큐엘수정세팅,
} from './queries';

export default function useBoardtWriteAdvanced() {
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

  return {
    onChangeWriter: onChangeWriter,
    onChangeTitle: onChangeTitle,
    onChangeContent: onChangeContent,
    onClickUpdate: onClickUpdate,
    onClickSubmit, //shorthand-property (키, 밸류 값이 같으면, 하나로 생략가능)
  };
}
