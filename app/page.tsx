import Image from "next/image";
import styles from './page.module.css';
import Hero from '../public/hero.png'

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
    <button className={`${styles.button} pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500`}>See our works</button>
  </div>
  <div className={styles.item}>
  <Image className={styles.img} alt="" width={500}  height={500} src="https://i.pinimg.com/originals/bf/e5/cc/bfe5cc3105043ee04576891f697f6d34.jpg" />
  </div>
  </div>



  );
}

