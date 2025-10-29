'use client';

import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  const [hasMore, setHasMore] = useState(true);
  const onNext = () => {
    if (data === undefined) return;
    fetchMore({
      variables: { page: Math.ceil((data.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards?.length) {
          setHasMore(false);
          return { fetchBoards: [...prev.fetchBoards] };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <InfiniteScroll
      dataLength={data?.fetchBoards.length ?? 0}
      hasMore={hasMore}
      next={onNext}
      loader={<div>로딩중입니다.</div>}
    >
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
    </InfiniteScroll>
  );
}
