'use client';
import BoardWriteAdvanced from '@/components/09-05-board-write-advanced-hooks/index';

export default function BoardComponentNewPage() {
  return (
    <>
      <div>페이지컴포넌트영역</div>
      <BoardWriteAdvanced isEdit={false} />
    </>
  );
}
