import Link from 'next/link';

export default function BbbPage() {
  return (
    <>
      <div>bbb 페이지입니다.</div>

      {/* SPA 방식 */}
      <Link href="/section04/04-01-aaa">aaa페이지로 이동할래요!</Link>

      {/* MPA방식 */}
      <a></a>
    </>
  );
}
