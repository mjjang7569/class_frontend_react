'use client';
import { UpCircleOutlined } from '@ant-design/icons';
export default function LibraryIconPage() {
  const onClickDelete = (event) => {
    // alert(`${event.target.id}를 정말로 삭제합니까?`); => 비어있음 => <svg/> 태그를 클릭한 것이기 때문
    alert(`${event.currentTarget.id}를 정말로 삭제합니까?`);
  };
  return <UpCircleOutlined id="삭제할게시글ID" onClick={onClickDelete} />;
}
