export default function MapFruitsPage() {
  //1.기본예제
  const aaa = [
    <div key={1}>1레드향</div>,
    <div key={2}>2샤인머스캣</div>,
    <div key={3}>3산청딸기</div>,
  ];

  //2.실무 백엔드 데이터 예제
  const fetchFruits = [
    { number: 1, title: '레드향' }, // <div>1 레드향</div>
    { number: 2, title: '샤인머스켓' }, // <div>2 샤인머스켓</div>
    { number: 3, title: '산청딸기' },
    { number: 4, title: '한라봉' },
    { number: 5, title: '사과' },
    { number: 6, title: '애플망고' },
    { number: 7, title: '딸기' },
    { number: 8, title: '천혜향' },
    { number: 9, title: '과일선물세트' },
    { number: 10, title: '귤' },
  ];

  const bbb = fetchFruits.map((el) => (
    <div key={el.number}>
      {el.number} {el.title}
    </div>
  ));
  return (
    <div>
      <div>{aaa}</div>
      ===============
      <div>{bbb}</div>
      ===============
      <div>
        {fetchFruits.map((el) => (
          <div key={el.number}>
            {el.number} {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
