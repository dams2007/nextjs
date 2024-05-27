import React from "react";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import Image from "next/image";
import get from "../../utils/http";

export type RawDataPortfolio = {
	id: number;
	title: string;
	body: string;
};

async function Category({ params }: { params: { category: string } }) {
	const data = (await get(
		"https://jsonplaceholder.typicode.com/posts",
		true
	)) as RawDataPortfolio[];
	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{params.category}</h1>
			{data.map((item) => (
				<div className={styles.item} key={item.id}>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.description}>{item.body}</p>
						<Button text="See more" url="#" />
					</div>
					<div className={styles.imgContainer}>
						<Image
							className={styles.img}
							fill={true}
							src="https://i.pinimg.com/originals/34/d2/1c/34d21c0f22a00ce3a56debedf5f9a248.jpg"
							alt=""
						/>
					</div>
				</div>
			))}
		</div>
	);
}
export default Category;
