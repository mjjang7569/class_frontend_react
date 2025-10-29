'use client';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
const FETCH_ROARD = gql`
  query fetchBoard($qqq: Int) {
    fetchBoard(number: $qqq) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage() {
  const 내주소변수 = useParams();

  const { data } = useQuery(FETCH_ROARD, {
    variables: {
      qqq: Number(내주소변수.qqq),
    },
  });

  return (
    <>
      <div>568번게시글 상세페이지</div>
      <div>작성자 : {data ? data.fetchBoard.writer : '받아오는 중..'}</div>
      <div>제목 :{data && data.fetchBoard.title} </div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </>
  );
}
