import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>TEST</h1>
					<p className={styles.desc}>TEST</p>
					<div className={styles.author}>
						<Image
							src="https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>TEST</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src="https://i.pinimg.com/originals/9b/36/2b/9b362b5888f352d8a15be134d160fe5b.jpg"
						alt=""
						fill={true}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}></p>
			</div>
		</div>
	);
};

export default BlogPost;
