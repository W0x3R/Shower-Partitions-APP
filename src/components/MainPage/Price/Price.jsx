import styles from "./Price.module.scss"
import showerImage from "../../../assets/MainPage/shower-partition.webp"
import clickHand from "../../../assets/MainPage/click-hand.svg?url"

const Price = () => {
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
						loading="lazy"
						alt=""
						width="288"
						height="448"
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
							loading="lazy"
							src={showerImage}
							alt=""
							width="275"
							height="410"
						/>
						<a
							className={styles["price__info-link"]}
							href="https://telegram.im/@georgiyzm"
							target="_blink"
						>
							<span>Связаться с нами в Telegram</span>
							<img src={clickHand} alt="" width="26" height="26" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Price
