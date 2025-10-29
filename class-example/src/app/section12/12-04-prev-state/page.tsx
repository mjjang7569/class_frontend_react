'use client';

import { useState } from 'react';

export default function PrevStatePage() {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <>
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCountUp}>카운트올리기</button>
    </>
  );
}
