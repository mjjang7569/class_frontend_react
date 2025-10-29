'use client';

import { useState } from 'react';

export default function InputRefactoringBeforePage() {
  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    content: '',
  });

  //   const onChangeInputs = (event) => {
  //     setInputs({
  //       writer: inputs.writer,
  //       title: inputs.title,
  //       content: inputs.content,
  //       [event.target.id]: event.target.value,
  //     });
  //   };

  const onChangeInputs = (event) => {
    setInputs((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <>
      <input id="writer" type="text" onChange={onChangeInputs} />
      <input id="title" type="text" onChange={onChangeInputs} />
      <input id="content" type="text" onChange={onChangeInputs} />
    </>
  );
}
