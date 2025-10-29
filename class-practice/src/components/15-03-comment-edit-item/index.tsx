'use client';
import { useState } from 'react';

export default function CommentItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = () => {
    setIsEdit(true);
  };
  return isEdit ? (
    <div key={props.el._id}>
      <input />
    </div>
  ) : (
    <div key={props.el._id}>
      <span>{props.el.title}</span>
      <span>{props.el.writer}</span>
      <button onClick={onClickEdit}>수정하기</button>
    </div>
  );
}
