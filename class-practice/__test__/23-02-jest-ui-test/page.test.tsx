import JestUiTestPage from '@/app/section23/23-02-jest-ui-test/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
it('잘그려지는지 확인하기', () => {
  render(<JestUiTestPage />);
  const myText = screen.getByText('철수는 13살 입니다.');
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText('취미입력 :');
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText('등록하기');
  expect(myText3).toBeInTheDocument();
});
