'use client';
import { useRouter } from 'next/navigation';

export default function StaticRoutingBoardPage() {
  const router = useRouter();
  const onClickSubmit1 = () => {
    //1.게시글 등록 기능
    //...
    alert('게시글 등록 성공');
    //2.상세페이지
    router.push('/section07/07-01-static-routing-board-moved/1');
  };
  const onClickSubmit2 = () => {
    router.push('/section07/07-01-static-routing-board-moved/2');
  };
  const onClickSubmit3 = () => {
    router.push('/section07/07-01-static-routing-board-moved/3');
  };

  return (
    <>
      <button onClick={onClickSubmit1}>1번게시글등록</button>
      <button onClick={onClickSubmit2}>2번게시글등록</button>
      <button onClick={onClickSubmit3}>3번게시글등록</button>
    </>
  );
}
