'use client';
import { useState } from 'react';
// import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';

export default function BoardtWriteAdvancedUI(props) {
  //여기에 기능 작성도 가능은 함. 안 할 뿐
  return (
    <>
      작성자 :
      <input
        type="text"
        onChange={props.작성자변경기능}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목 :
      <input
        type="text"
        onChange={props.제목변경기능}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용 :
      <input
        type="text"
        onChange={props.내용변경기능}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        게시글{props.isEdit ? '수정' : '등록'}하기
      </button>
    </>
  );
}
