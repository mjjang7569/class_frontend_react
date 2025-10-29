'use client';
import BoardWriteAdvanced from '@/components/09-04-board-write-advanced-container-presentational/boards-writer-advanced.container';

export default function BoardComponentNewPage() {
  return (
    <>
      <div>페이지컴포넌트영역</div>
      <BoardWriteAdvanced isEdit={false} />
    </>
  );
}
