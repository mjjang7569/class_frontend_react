import { CreateBoardInput } from '@/commons/graphql/graphql';
import z from 'zod';

export interface ISchema extends Pick<CreateBoardInput, 'title' | 'contents'> {
  // hobby? : string 추가도 가능
  // Omit 보다는 Pick을 쓰자(Omit은 위험 유지보수 어려움)
}

export const schema = z.object({
  title: z.string().min(1, { message: '제목을 입력해 주세요.' }),
  contents: z.string().min(1, { message: '내용을 입력해 주세요.' }),
  // hobby: z.string().optional(),
  // email: z.string().email('이메일 형식에 적합하지 않습니다.'),
  // password: z
  //   .string()
  //   .min(4, { message: '비밀번호는 최소 4자리 이상 입력해 주세요.' })
  //   .max(15, { message: '비밀번호는 최대 15자리로 입력해 주세요.' }),
  // phone: z
  //   .string()
  //   .regex(/\d{3}-\d{3,4}-\d{4}/, { message: '휴대폰 형식에 맞지 않습니다.' }),
});
