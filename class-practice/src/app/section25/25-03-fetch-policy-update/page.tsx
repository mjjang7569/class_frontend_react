'use client';

import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

const FETCH_BOARDS = gql`
  query fetchBoards{
    fetchBoards{
      _id
      writer
      title
      contents
    }
  }
`;

const UPDATE_BAORD = gql`
mutation updateBoard{
    updateBoard(
        boardId: "690bffe8d4299d0029cd21e7",
        password : "1234",
        updateBoardInput : {
            title : "제목변경됨",
            contents : "내용변경됨"
        }
    ){
        _id
        writer
        title
        contents
    }
}
`
export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [updateBoard]=useMutation(UPDATE_BAORD)
  const onClickUpdate = ()=>{
    updateBoard()
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
        <button onClick={onClickUpdate}>데이터수정하기</button>
    </div>
  );
}
