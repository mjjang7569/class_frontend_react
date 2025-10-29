'use client';
import { gql, useQuery } from '@apollo/client';

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoardDeletePage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickParent = (event) => {
    // event.target => 내가 클릭한 태그
    // event.currentTarget => 내 클릭이 버블링되어 부모의 onClick 실행되었을 때의 태그
    alert(`이 글의 작성자는 ${event.currentTarget.id}`);
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => {
        return (
          <div key={el.number} id={el.writer} onClick={onClickParent}>
            <span>
              <input type="checkbox" />
            </span>
            <span>{el.number}</span>
            <span>{el.title}</span>
            <span>{el.writer}</span>
          </div>
        );
      })}
    </div>
  );
}
