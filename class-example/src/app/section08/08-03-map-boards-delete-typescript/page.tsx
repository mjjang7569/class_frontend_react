'use client';
import { gql, useQuery, useMutation } from '@apollo/client';
import { MouseEvent } from 'react';

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number_: Int) {
    deleteBoard(number: $number_) {
      message
    }
  }
`;
interface IFetchBoard {
  number: number;
  title: string;
  writer: string;
}

export default function MapBoardDeletePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    await deleteBoard({
      variables: {
        number_: Number((event.target as HTMLButtonElement).id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IFetchBoard) => {
        return (
          <div key={el.number}>
            <span>
              <input type="checkbox" />
            </span>
            <span>{el.number}</span>
            <span>{el.title}</span>
            <span>{el.writer}</span>
            <span>
              <button id={String(el.number)} onClick={onClickDelete}>
                삭제
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
