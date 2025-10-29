'use client';
import styles from './styles.module.css';
// import { useFormContext } from 'react-hook-form';

export default function MyInput(props) {
  //   const { register } = useFormContext();
  //=> props.register대신, useFormContext()로 가져올 수 있음

  // 1) props.register 방식 : 느슨한 결합
  // 장점 ) form 외부에서도  MyInput 컴포넌트 사용가능
  // 단점 ) props. 전달 props 타입 정의 때문에 코드량 증가

  //2. useFormContext 방식 : 강한 결합
  // 장점 ) 불필요한 props전달 필요가 없어 코드량 감소
  // 단점 ) form 외부에서는 MyInput 컴포넌트 사용 불가(정확히는 <FormProvider />내에서만 가능)

  return (
    <input
      className={styles.myinput}
      type={props.type}
      {...props.register(props.name)}
    />
  );
}
