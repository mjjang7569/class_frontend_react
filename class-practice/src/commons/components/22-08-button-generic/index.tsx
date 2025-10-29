'use client';
import { FieldValues, FormState } from 'react-hook-form';
import styles from './styles.module.css';
// import { useFormContext } from "react-hook-form";

interface Iprops {
  formState: FormState<FieldValues>;
  children: React.ReactNode;
}

export default function MyButton(props: Iprops) {
  // const {formState} =useFormContext()
  //=> props.formState대신, useFormContext()로 가져올 수 있음
  return (
    <button
      className={styles.mybutton}
      type="submit"
      disabled={!props.formState.isValid}
    >
      {props.children}
    </button>
  );
}
