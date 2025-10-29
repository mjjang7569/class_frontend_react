'use client';

import BoardWriteAdvanced from '@/components/09-03-board-write-advanced';
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
export default function BoardComponentEditPage() {
  const 내주소변수 = useParams();
  const { data } = useQuery(FETCH_ROARD, {
    variables: {
      qqq: Number(내주소변수.number),
    },
  });
  return (
    // <>
    //   <h1>등록페이지</h1>
    //   제목: <input type="text" />
    //   내용 : <input type="text" />
    //   <button>등록하기</button>
    // </>
    <BoardWriteAdvanced isEdit={true} data={data} />
  );
}
