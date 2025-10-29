import { gql } from '@apollo/client';

export const 나의그래프큐엘세팅 = gql`
  # 변수의 타입 적는 곳
  mutation createBoard(
    $mywriter: String
    $mytitle: String
    $mycontent: String
  ) {
    # 실제 전달할 변수 적는 곳
    createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {
      number
      message
    }
  }
`;
export const 나의그래프큐엘수정세팅 = gql`
  # 변수의 타입 적는 곳
  mutation updateBoard(
    $mynumber: Int
    $mywriter: String
    $mytitle: String
    $mycontent: String
  ) {
    # 실제 전달할 변수 적는 곳
    updateBoard(
      number: $mynumber
      writer: $mywriter
      title: $mytitle
      contents: $mycontent
    ) {
      number
      message
    }
  }
`;
export const FETCH_ROARD = gql`
  query fetchBoard($qqq: Int) {
    fetchBoard(number: $qqq) {
      number
      writer
      title
      contents
    }
  }
`;
