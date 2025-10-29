'use client';
import BoardWriteAdvanced from '@/components/10-01-board-write-advanced-hooks-typescript-codegen';

export default function BoardComponentNewPage() {
  return (
    <>
      <div>페이지컴포넌트영역</div>
      <BoardWriteAdvanced isEdit={false} />
    </>
  );
}
