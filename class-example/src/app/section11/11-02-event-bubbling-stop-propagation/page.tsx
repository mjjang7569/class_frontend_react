'use client';
import { gql, useQuery } from '@apollo/client';
import CheckBox from './checkbox';

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contentsz
    }
  }
`;

export default function MapBoardDeletePage() {
  const { data } = useQuery(FETCH_BOARDS);

  // const onClickParent = (event) => {
  //   // event.target => 내가 클릭한 태그
  //   // event.currentTarget => 내 클릭이 버블링되어 부모의 onClick 실행되었을 때의 태그
  //   alert(`이 글의 작성자는 ${event.currentTarget.id}`);
  // };
  const onClick1 = (event) => {
    alert('1번 클릭');
  };

  const onClick4 = (event) => {
    alert('4번 클릭');
  };
  const onClick5 = (event) => {
    alert('5번 클릭');
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => {
        return (
          <div key={el.number} id={el.writer} onClick={onClick1}>
            <CheckBox />
            <span onClick={onClick4}>{el.number}</span>
            <span onClick={onClick5}>{el.title}</span>
            <span>{el.writer}</span>
          </div>
        );
      })}
    </div>
  );
}
