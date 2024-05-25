import React, { ReactNode, useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import get from "../../utils/http";

type propsBlogPost = {
	params: any | undefined;
};

export type RawDataDetailBlogPost = {
	id: string;
	title: string;
	desc: string;
	image: string;
	content: string;
	username: string;
};

const BlogPost = async ({ params }: propsBlogPost) => {
	const id = params.id as string;
	const data = (await get(
		`http://localhost:3000/api/posts/${id}`
	)) as RawDataDetailBlogPost;

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>{data.title}</h1>
					<p className={styles.desc}>{data.desc}</p>
					<div className={styles.author}>
						<Image
							src="https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>{data.username}</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src={data.image}
						alt="test"
						fill={true}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>{data.content}</p>
			</div>
		</div>
	);
};

export default BlogPost;
