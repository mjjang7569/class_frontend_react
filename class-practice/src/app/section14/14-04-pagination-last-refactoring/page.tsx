'use client';

import { useQuery } from '@apollo/client';
import { FECTH_BOARDS_COUNT, FETCH_BOARDS } from './queries';
import List from '@/components/14-04-pagination-last-refactoring/list';
import Pagination from '@/components/14-04-pagination-last-refactoring/pagination';

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FECTH_BOARDS_COUNT);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  return (
    <div>
      <List data={data?.fetchBoards} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
