'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const [dog, setDog] = useState('');
  // componentDidMount와 동일
  useEffect(() => {
    console.log('그려지고 나서 실행!');
    const getImage = async () => {
      const result = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await result.json();
      setDog(data.message);
    };
    getImage();
  }, []);
  // componentDidMount + componentDidUpdate와 동일
  useEffect(() => {
    console.log('뭐든 변경되고 나서 실행!');
  });
  //의존성 배열
  useEffect(() => {
    console.log('count가 변경되고 나서 실행!');
  }, [count]);
  //componentWillUnmount와 동일
  useEffect(() => {
    return () => {
      console.log('사라지기 전에 실행!');
    };
  }, []);
  //useEffect를 하나로 합치지
  // useEffect(() => {
  //   console.log('변경되고 나서 실행!');
  //   return () => {
  //     console.log('사라지기 전에 실행!');
  //   };
  // }, []);
  //useEffect의 잘못된 사용법(1. 추가 렌더링, 2. 무한루프)
  // useEffect(() => {
  //   setCount(count + 1);
  // }, []);

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCountUp = () => {
    setCount(count + 1);
  };
  console.log('나는 언제 실행될까~?');

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트올리기</button>
      <Link href={'/'}>나가기</Link>
      <img src={dog} />
    </>
  );
}
