'use client'
import React from 'react'
import styles from './page.module.css'
import Button from '@/app/components/Button/Button';
import Image from 'next/image';

// Need to improve this
type propsCategory = {
  params: any | undefined;
};

const Category = ({ params}: propsCategory) => {

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
          <Button text='See more' url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://i.pinimg.com/originals/34/d2/1c/34d21c0f22a00ce3a56debedf5f9a248.jpg" alt="" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
          <Button text='See more' url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://i.pinimg.com/originals/34/d2/1c/34d21c0f22a00ce3a56debedf5f9a248.jpg" alt="" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
          <Button text='See more' url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://i.pinimg.com/originals/34/d2/1c/34d21c0f22a00ce3a56debedf5f9a248.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Category