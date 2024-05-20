import React from 'react'
import styles from './button.module.css';
import Link from 'next/link';

type buttonProps = {
    text: string;
    url: string;
}

const Button = ({text, url}:buttonProps) => {
  return (
    <Link href={url}>
    <button className={`${styles.button} pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500`}>{text}</button>
    </Link>
  );
}

export default Button