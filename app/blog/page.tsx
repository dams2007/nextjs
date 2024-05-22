"use client";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./page.module.css";
import { get } from "../utils/http";
import BlogPosts, { BlogPost } from "./blogPost";

export type RawDataBlogPost = {
	id: number;
	title: string;
	body: string;
};

export default function Blog() {
	const [fetchedPosts, setFetchedPost] = useState<BlogPost[]>();
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<string>();

	useEffect(() => {
		async function fetchedPosts() {
			setIsFetching(true);
			try {
				const data = (await get(
					"https://jsonplaceholder.typicode.com/posts"
				)) as RawDataBlogPost[];

				const blogPosts: BlogPost[] = data.map((rawPost) => {
					return {
						id: rawPost.id,
						title: rawPost.title,
						body: rawPost.body,
					};
				});
				setFetchedPost(blogPosts);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			}

			setIsFetching(false);
		}
		fetchedPosts();
	}, []);

	let content: ReactNode;

	if (fetchedPosts) {
		content = <BlogPosts posts={fetchedPosts} />;
	}

	if (isFetching) {
		content = <p id="loading-fallback">Fetching posts...</p>;
	}

	return <div className={styles.mainContainer}>{content}</div>;
}
