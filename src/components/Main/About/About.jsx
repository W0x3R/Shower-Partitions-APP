import styles from "./About.module.scss"
import featureCircle from "../../../assets/main/feature-circle.svg?url"
import clickHand from "../../../assets/main/click-hand.svg?url"

export const About = () => {
	return (
		<section className={styles.about}>
			<h1 className={styles.about__title}>
				<b>Душевые перегородки</b> на заказ
			</h1>
			<div className={styles.about__description}>
				<p className={styles["about__description-text"]}>
					Стильные ограждения для душевой премиум качества
				</p>
			</div>
			<div className={styles.about__features}>
				<div className={styles["about__features-item"]}>
					<img src={featureCircle} />
					<p className={styles["about__features-text"]}>
						<b>Закаленное стекло</b> <br />
						8-10 мм
					</p>
				</div>
				<div className={styles["about__features-item"]}>
					<img src={featureCircle} />
					<p className={styles["about__features-text"]}>
						<b>Дизайнерские решения.</b>
					</p>
				</div>
				<div className={styles["about__features-item"]}>
					<img src={featureCircle} />
					<p className={styles["about__features-text"]}>
						<b>
							Тонкая <br />
							рамка
						</b>
					</p>
				</div>
				<div className={styles["about__features-item"]}>
					<img src={featureCircle} />
					<p className={styles["about__features-text"]}>
						<b>
							Надежная <br />
							фурнитура
						</b>
					</p>
				</div>
			</div>
			<div className={styles.about__order}>
				<button className={styles["about__order-btn"]}>
					<span> Рассчитать цену по моим размерам</span>
					<img src={clickHand} />
				</button>
				<p className={styles["about__order-text"]}>
					<b>Перезвоним и проконсультируем </b>
				</p>
			</div>
		</section>
	)
}
