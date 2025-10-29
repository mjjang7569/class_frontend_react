'use client';

import { checkValidationFile } from '@/commons/libraries/18-03-image-validation';
import { gql, useMutation } from '@apollo/client';
import { ChangeEvent, useRef, useState } from 'react';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; //배열로 들어오는 이유 : <input type="file" multiple />일 때, 여러개 드래그 선택 가능
    console.log(file);
    if (file) {
      const isValid = checkValidationFile(file);
      if (!isValid) return;

      const result = await uploadFile({
        variables: {
          file: file,
        },
      });

      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url);
    }
  };

  const onClcikImage = () => {
    fileRef.current?.click();
  };
  ////////////게시글/////////////
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents: content,
          password: '1234',
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };
  return (
    <>
      <button onClick={onClickSubmit}>게시글등록</button>
      <br />
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContent} />
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'gray' }}
        onClick={onClcikImage}
      >
        이미지선택
      </div>
      <input
        style={{ display: 'none' }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        accept="image/jpeg, image/png" //이 형식을 제외한 형식의 파일은 선택 자체가 안되게 막기
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
