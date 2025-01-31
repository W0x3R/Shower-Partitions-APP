import styles from "./Price.module.scss"
import showerImage from "../../../assets/main/shower-partition.webp"
import clickHand from "../../../assets/main/click-hand.svg?url"

export const Price = () => {
	return (
		<section className={styles.price}>
			<div className="container">
				<h2 className={styles.price__title}>
					Цена душевых перегородок на заказ в Гомеле
				</h2>
				<div className={styles.price__info}>
					<img
						className={`${styles["price__info-img"]} ${styles.desktop}`}
						src={showerImage}
						alt=""
					/>
					<div className={styles["price__text-wrapper"]}>
						<p className={styles["price__info-text"]}>
							Чтобы узнать стоимость стеклянных ограждений, необходимо
							согласовать размеры и материалы
						</p>
						<p className={styles["price__info-subtext"]}>
							Свяжитесь со специалистом в <b>Telegram</b>. Он поможет подобрать
							подходящую душевую и быстро рассчитает предварительную стоимость
						</p>
						<img
							className={`${styles["price__info-img"]} ${styles.mobile}`}
							src={showerImage}
							alt=""
						/>
						<a className={styles["price__info-link"]} href="#">
							<span>Связаться с нами в Telegram</span>
							<img src={clickHand} alt="" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
