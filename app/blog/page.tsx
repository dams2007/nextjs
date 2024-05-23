import React from "react";
import styles from "./page.module.css";
import { get } from "../utils/http";
import Image from "next/image";
import Link from "next/link";

export type RawDataBlogPost = {
	id: number;
	title: string;
	body: string;
};

const Blog = async () => {
	const data = (await get(
		"https://jsonplaceholder.typicode.com/posts"
	)) as RawDataBlogPost[];
	return (
		<div className={styles.mainContainer}>
			{data.map((item) => (
				<Link
					href={`/blog/${item.id}`}
					className={styles.container}
					key={item.id}
				>
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
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.body}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Blog;
