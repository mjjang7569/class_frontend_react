'use client';

import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const [keyword, setKeyword] = useState('');
  const { data, refetch } = useQuery(FETCH_BOARDS);
  //검색에서 refech를 했을 때 keyword가 refetch에 이미 저장되어 있는 상태이므로, 추가로 키워드 포함하지 않아도 됨
  //page만 갱신된다
  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };
  const onChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const onClickSearch = () => {
    refetch({
      search: keyword,
      page: 1,
    });
  };

  return (
    <div>
      검색어입력 : <input type="text" onChange={onChangeKeyword} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(0).map((el, index) => (
        <button key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
