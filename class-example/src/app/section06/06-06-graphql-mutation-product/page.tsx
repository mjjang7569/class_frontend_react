'use client';

// import React from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $myseller: String
    $mycreateProductInput: CreateProductInput!
  ) {
    createProduct(
      seller: $myseller
      createProductInput: $mycreateProductInput
    ) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        myseller: '철수',
        mycreateProductInput: {
          name: '기계식키보드',
          detail: '저렴함',
          price: 30000,
        },
      },
    });

    console.log(result);
  };
  return <button onClick={onClickSubmit}>상품등록하기</button>;
}
