'use client';

import usePagination from './hook';

export default function Pagination(props) {
  const { startPage, onClickPage, onClickPrevPage, onClickNextPage } =
    usePagination(props);
  return (
    <div>
      <button onClick={onClickPrevPage}>이전페이지</button>
      {new Array(10).fill(0).map((el, index) => {
        if (index + startPage <= props.lastPage) {
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
