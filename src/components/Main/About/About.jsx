import styles from "./About.module.scss"

export const About = () => {
	return (
		<section className={styles.about}>
			<h1 className={styles.about__title}>Душевые перегородки на заказ</h1>
			<div className={styles.about__description}>
				<div className={styles["about__description-dots"]}></div>
				<p className={styles["about__description-text"]}></p>
			</div>
			<div className={styles.about__features}>
				<div className={styles["about__features-item"]}></div>
				<div className={styles["about__features-item"]}></div>
				<div className={styles["about__features-item"]}></div>
			</div>
			<div className={styles.about__order}>
				<button className={styles["about__order-btn"]}></button>
				<p className={styles["about__order-text"]}></p>
			</div>
		</section>
	)
}
