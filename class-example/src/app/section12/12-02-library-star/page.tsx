'use client';
import React, { useState } from 'react';
import { Rate } from 'antd';

const App: React.FC = () => {
  const [value, setValue] = useState(3);

  //1단계 방식
  const 함수 = (value: number) => {
    setValue(value);
  };
  return (
    <>
      {/* 1단계 방식 */}
      {/* 진짜 onChange */}
      {/* <button onChange={}></button> */}
      {/* 아래의 onChange는 antd에서 만든 가짜 onChange */}
      <Rate onChange={함수} value={value} />
      <span>점수 : {value}점 </span>

      {/* 2단계 방식  : 유지보수가 어려운 코드*/}
      <Rate
        onChange={(value: number) => {
          setValue(value);
        }}
        value={value}
      />
      <span>점수 : {value}점 </span>
      {/* 3단계 방식 */}
      <Rate onChange={(value) => setValue(value)} value={value} />
      <span>점수 : {value}점 </span>
      {/* 4단계 방식 */}
      <Rate onChange={setValue} value={value} />
      <span>점수 : {value}점 </span>
    </>
  );
};

export default App;
