'use client';
import { gql, useQuery } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
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
      qqq: Number(내주소변수.number),
    },
  });
  const router = useRouter();
  const onClickMove = () => {
    router.push(`/section09/09-03-boards-advanced/${내주소변수.number}/edit`);
  };
  return (
    <>
      <div>{내주소변수.number}게시글 상세페이지</div>
      <div>작성자 : {data ? data.fetchBoard.writer : '받아오는 중..'}</div>
      <div>제목 :{data && data.fetchBoard.title} </div>
      <div>내용 : {data?.fetchBoard.contents}</div>
      <button onClick={onClickMove}>수정하기</button>
    </>
  );
}
