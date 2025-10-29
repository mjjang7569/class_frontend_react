'use client';

import { useEffect } from 'react';

export default function HydrationBasicPage() {
  //   alert('반가워요!');
  //   localStorage.getItem('aaa');
  //   console.log('안녕하세요');

  //   방법1 ) process.browser 방법
  //   if (process.browser) {
  //     alert('반가워요!');
  //     localStorage.getItem('aaa');
  //     console.log('나는 지금 브라우저다');
  //   } else {
  //     console.log('나는 지금 프론트엔드 서버다');
  //   }

  //  방법2) typeof window 방법
  //   if (typeof window !== "undefined") {
  //     alert('반가워요!');
  //     localStorage.getItem('aaa');
  //     console.log('나는 지금 브라우저다');
  //   } else {
  //     console.log('나는 지금 프론트엔드 서버다');
  //   }

  // 프리렌더링 무시 : useEffect 방법 (클라이언트에서만 실행)
  useEffect(() => {
    alert('반가워요!');
    localStorage.getItem('aaa');
    console.log('나는 지금 브라우저다');
  }, []);
  return <></>;
}
