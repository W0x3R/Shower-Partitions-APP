import styles from "./About.module.scss"
import featureCircle from "../../../assets/main/feature-circle.svg?url"
import clickHand from "../../../assets/main/click-hand.svg?url"

export const About = () => {
	const featuresItemsText = [
		"Дизайнерские решения",
		"Тонкая рамка",
		"Надежная фурнитура",
	]

	return (
		<section className={styles.about}>
			<div className={styles.about__background} aria-hidden="true" />
			<div className="container">
				<div className={styles.about__content}>
					<h1 className={styles.about__title}>
						<b>Душевые перегородки</b> на заказ
					</h1>
					<div className={styles.about__description}>
						<div className={styles["about__description-dots"]}>
							{new Array(4).fill(null).map((_, i) => {
								return (
									<span
										key={i}
										className={styles["about__description-dot"]}
									></span>
								)
							})}
						</div>
						<p className={styles["about__description-text"]}>
							Стильные ограждения для душевой премиум качества
						</p>
					</div>
					<div className={styles.about__features}>
						<div className={styles["about__features-item"]}>
							<img src={featureCircle} />
							<p className={styles["about__features-text"]}>
								<b>Закаленное стекло</b>
								<br />
								8-10 мм
							</p>
						</div>
						{featuresItemsText.map((itemText) => {
							return (
								<div className={styles["about__features-item"]} key={itemText}>
									<img src={featureCircle} alt="" />
									<p className={styles["about__features-text"]}>
										<b>{itemText}</b>
									</p>
								</div>
							)
						})}
					</div>
					<div className={styles.about__order}>
						<button className={styles["about__order-btn"]}>
							<span> Рассчитать цену по моим размерам</span>
							<img src={clickHand} alt="" />
						</button>
						<p className={styles["about__order-text"]}>
							<b>Перезвоним и проконсультируем </b>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
