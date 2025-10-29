'use client';
import { useRouter } from 'next/navigation';

export default function StaticRoutingBoardPage() {
  const router = useRouter();
  const onClickSubmit1 = () => {
    //1.게시글 등록 기능
    //...
    alert('게시글 등록 성공');
    //2.상세페이지
    router.push('/section07/07-03-dynamic-routing-board-query-moved/568');
  };
  const onClickSubmit2 = () => {
    router.push('/section07/07-03-dynamic-routing-board-query-moved/569');
  };
  const onClickSubmit3 = () => {
    router.push('/section07/07-03-dynamic-routing-board-query-moved/570');
  };

  return (
    <>
      <button onClick={onClickSubmit1}>568번게시글등록</button>
      <button onClick={onClickSubmit2}>569번게시글등록</button>
      <button onClick={onClickSubmit3}>570번게시글등록</button>
    </>
  );
}
