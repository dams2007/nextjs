import React from 'react';
import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      
        <Link href="blog/testId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://i.pinimg.com/originals/03/3a/ef/033aef6f9b8c975928ffe27b5e37c446.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>test</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
        <Link href="blog/testId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://i.pinimg.com/originals/03/3a/ef/033aef6f9b8c975928ffe27b5e37c446.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>test</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
        <Link href="blog/testId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://i.pinimg.com/originals/03/3a/ef/033aef6f9b8c975928ffe27b5e37c446.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>test</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
    </div>
  );
}

export default Blog