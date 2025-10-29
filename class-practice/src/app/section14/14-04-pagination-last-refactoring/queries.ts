import { gql } from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export const FECTH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
