import styles from "./Delivery.module.scss"
import carImg from "../../assets/deliveryPage/car-gif.gif"
import deliveryPageData from "../../data/deliveryPage/deliveryPageData"

const Delivery = () => {
	return (
		<section className={styles.delivery}>
			<div className="container">
				<h1 className={styles.delivery__title}>
					<b>Оплата и доставка</b>
				</h1>
				<div className={styles.delivery__wrapper}>
					<div className={styles["delivery__content-wrapper"]}>
						<img
							className={styles.delivery__img}
							src={carImg}
							width="704"
							height="371"
							alt=""
							loading="lazy"
						/>
						<h2 className={styles.delivery__subtitle}>Этапы заказа</h2>
						<div className={styles["delivery__stages-wrapper"]}>
							{deliveryPageData.map(({ id, title, text }) => {
								return (
									<div key={id} className={styles["delivery__stages-item"]}>
										<div className={styles["delivery__stages-content"]}>
											<h3 className={styles["delivery__stage-title"]}>
												{title}
											</h3>
											<p className={styles["delivery__stage-text"]}>{text}</p>
										</div>
										<div className={styles["delivery__stage-line"]}></div>
										<div className={styles["delivery__stage-circle"]}></div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Delivery
