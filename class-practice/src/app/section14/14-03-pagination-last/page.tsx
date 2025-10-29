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
const FECTH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function PaginationPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FECTH_BOARDS_COUNT);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };
  const onClickPrevPage = () => {
    if (startPage > 1) {
      setStartPage(startPage - 10);
      refetch({ page: startPage - 10 });
    }
  };
  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      refetch({ page: startPage + 10 });
    }
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}

      <button onClick={onClickPrevPage}>이전페이지</button>
      {new Array(10).fill(0).map((el, index) => {
        if (index + startPage <= lastPage) {
          return (
            <button
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
            >
              {index + startPage}
            </button>
          );
        }
      })}
      <button onClick={onClickNextPage}>다음페이지</button>
    </div>
  );
}
