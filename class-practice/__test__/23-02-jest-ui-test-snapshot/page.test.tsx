import JestUiTestPage from '@/app/section23/23-02-jest-ui-test-snapshot/page';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
it('잘그려지는지 확인하기', () => {
  const result = render(<JestUiTestPage />);
  expect(result.container).toMatchInlineSnapshot(`
<div>
  <div>
    철수는 12살 입니다.
  </div>
  취미입력 : 
  <input />
  <button>
    등록하기
  </button>
</div>
`);
});
