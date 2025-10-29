'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ISchema, schema } from './shema';

export default function ReactHookFormAfterPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const onClickSubmit = (data: ISchema) => {
    console.log(data);
  };
  console.log('리렌더링 되나요?');
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      제목 : <input type="text" {...register('title')} />
      <div style={{ color: 'red' }}>{formState.errors.title?.message}</div>
      <br />
      내용: <input type="text" {...register('content')} />
      <div style={{ color: 'red' }}>{formState.errors.content?.message}</div>
      <br />
      <button type="submit" disabled={!formState.isValid}>
        게시글 등록
      </button>
    </form>
  );
}
