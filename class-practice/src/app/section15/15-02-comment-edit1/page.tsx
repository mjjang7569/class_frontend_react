'use client';

import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState(-1);
  const onClickEdit = (event) => {
    setMyIndex(Number(event.target.id));
  };
  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        index === myIndex ? (
          <input key={el._id} />
        ) : (
          <div key={el._id}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
            <button id={index} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        )
      )}
    </div>
  );
}
