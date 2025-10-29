'use client';

import BoardWrite from '@/components/09-02-board-write';

export default function BoardComponentEditPage() {
  return (
    // <>
    //   <h1>등록페이지</h1>
    //   제목: <input type="text" />
    //   내용 : <input type="text" />
    //   <button>등록하기</button>
    // </>
    <BoardWrite isEdit={true} />
  );
}
