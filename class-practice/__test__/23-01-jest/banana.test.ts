import { add } from '@/app/section23/23-01-jest/banana';

it('더하기 테스트', () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});
