import styles from "./Delivery.module.scss"
import carImg from "../../assets/DeliveryPage/car.png"
import AsideInfoWidget from "../Widgets/AsideInfoWidget/AsideInfoWidget"

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
							width="915"
							height="686"
							alt=""
							loading="lazy"
						/>
						<h2 className={styles.delivery__subtitle}>Доставка и монтаж:</h2>
						<p className={styles.delivery__text}>
							Мы предлагаем доставку стеклянных душевых перегородок в Гомеле и
							ближайших регионах. Доставка и монтаж на транспорте монтажниками,
							больше не нужно ждать доставку, а потом когда смогут приехать
							монтажники.
						</p>
						<h2 className={styles.delivery__subtitle}>Оплата</h2>
						<p className={styles.delivery__text}>
							Любой удобный способ. Оплата наличными, банковской картой, по
							счету для Юридических лиц, перевод через СПБ, QR-код, по ссылке
							для оплаты.
							<br />
							Доплата за изделие производится в момент доставки.
						</p>
						<h2 className={styles.delivery__subtitle}>Сроки доставки</h2>
						<p className={styles.delivery__text}>
							Средний срок доставки — <b>3-7 рабочих дней</b>, в зависимости от
							загруженности производства и региона доставки.
						</p>
					</div>
					<AsideInfoWidget />
				</div>
			</div>
		</section>
	)
}

export default Delivery
