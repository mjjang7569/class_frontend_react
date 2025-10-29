'use client';

import { gql, useMutation } from '@apollo/client';
import { useRef, useState } from 'react';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageUploadPage() {
  const [imagUrl, setImageUrl] = useState('');
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event) => {
    const file = event.target.files[0]; //배열로 들어오는 이유 : <input type="file" multiple />일 때, 여러개 드래그 선택 가능
    console.log(file);
    const result = await uploadFile({
      variables: {
        file: file,
      },
    });
    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url);
  };
  const onClcikImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
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
      />
      <img src={`https://storage.googleapis.com/${imagUrl}`} />
    </>
  );
}
