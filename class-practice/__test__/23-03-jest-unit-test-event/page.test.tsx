import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import JestUnitTestEventPage from '@/app/section23/23-03-jest-unit-test-event/page';
it('카운트업 테스트', () => {
  render(<JestUnitTestEventPage />);
  fireEvent.click(screen.getByRole('count-button'));
  expect(screen.getByRole('count')).toHaveTextContent('1');
});
