"use client"
import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';

export type BlogPost = {
    id: number;
    title: string;
    body: string;
  };
  
type BlogPostsProps = {
  posts: BlogPost[];
};
  
export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div id="blog-posts">
      {posts.map((post) => (
        <Link href="blog/" className={styles.container} key={post.id}>
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
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}