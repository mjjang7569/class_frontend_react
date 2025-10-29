'use client';
import Box from '@/components/13-01-props';
export default function PropsPage() {
  // 1.props로 값 넘기기
  //   return (
  //     <>
  //       <div>=======위 쪽은 페이지 영역=======</div>
  //       <Box apple={3} />
  //       <div>=======아래 쪽은 페이지 영역======</div>
  //     </>
  //   );
  //2. props로 JSX넘기기
  //   return (
  //     <>
  //       <div>=======위 쪽은 페이지 영역=======</div>
  //       <Box
  //         apple={
  //           <div>
  //             <input type="text" />
  //             <button>클릭해 주세요</button>
  //           </div>
  //         }
  //       />
  //       <div>=======아래 쪽은 페이지 영역======</div>
  //     </>
  //   );
  //3. children 1번 째 방식
  //   return (
  //     <>
  //       <div>=======위 쪽은 페이지 영역=======</div>
  //       <Box
  //         children={
  //           <div>
  //             <input type="text" />
  //             <button>클릭해 주세요</button>
  //           </div>
  //         }
  //       />
  //       <div>=======아래 쪽은 페이지 영역======</div>
  //     </>
  //   );

  //4. children 2번 째 방식
  return (
    <>
      <div>=======위 쪽은 페이지 영역=======</div>
      <Box>
        <div>
          <input type="text" />
          <button>클릭해 주세요</button>
        </div>
      </Box>
      <div>=======아래 쪽은 페이지 영역======</div>
    </>
  );
}
