'use client';
//1. props 기초
// export default function Box({ apple }) {
//   return (
//     <>
//       <div>=====여기부터 컴포넌트 영역=====</div>
//       <div>사과는 {apple}개 입니다.</div>
//       <div>=====여기 위는 컴포넌트 영역=====</div>
//     </>
//   );
// }

//2. children 방식
export default function Box({ children }) {
  return (
    <>
      <div>=====여기부터 컴포넌트 영역=====</div>
      <div>사과는 {children}개 입니다.</div>
      <div>=====여기 위는 컴포넌트 영역=====</div>
    </>
  );
}
