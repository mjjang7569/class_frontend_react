'use client';
import styles from './styles.module.css';
// import { useFormContext } from "react-hook-form";

export default function MyButton(props) {
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
