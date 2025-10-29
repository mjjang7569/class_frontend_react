'use client';
import useBoardtWriteAdvanced from './hook';
import { Iprops } from './types';

export default function BoardtWriteAdvanced(props: Iprops) {
  const {
    onChangeWriter,
    onChangeContent,
    onChangeTitle,
    onClickSubmit,
    onClickUpdate,
  } = useBoardtWriteAdvanced();
  return (
    <>
      작성자 :
      <input
        type="text"
        onChange={onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목 :
      <input
        type="text"
        onChange={onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용 :
      <input
        type="text"
        onChange={onChangeContent}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        게시글{props.isEdit ? '수정' : '등록'}하기
      </button>
    </>
  );
}
