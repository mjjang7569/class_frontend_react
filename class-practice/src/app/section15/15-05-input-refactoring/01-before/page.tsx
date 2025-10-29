'use client';

import { useState } from 'react';

export default function InputRefactoringBeforePage() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={onChangeWriter} />
      <input type="text" onChange={onChangeTitle} />
      <input type="text" onChange={onChangeContent} />
    </>
  );
}
