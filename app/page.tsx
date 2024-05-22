import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button/Button";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>
					Design isn’t finished until somebody is using it
				</h1>
				<p className={styles.desc}>
					Turning your Idea into Reality. We bring together the teams from the
					global tech industry.
				</p>
				<Button url="/portfolio" text="See Our Works" />
			</div>
			<div className={styles.item}>
				<Image
					className={styles.img}
					alt=""
					width={500}
					height={500}
					src="https://i.pinimg.com/originals/bf/e5/cc/bfe5cc3105043ee04576891f697f6d34.jpg"
				/>
			</div>
		</div>
	);
}
