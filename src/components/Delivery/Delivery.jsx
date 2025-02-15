import { Link } from "react-router-dom"
import carImg from "../../assets/delivery/car.webp"
import clickHand from "../../assets/main/click-hand.svg?url"
import styles from "./Delivery.module.scss"

export const Delivery = () => {
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
							width="100%"
							alt=""
							loading="lazy"
						/>
						<h2 className={styles.delivery__subtitle}>Доставка и монтаж:</h2>
						<p className={styles.delivery__text}>
							Доставка и монтаж на фирменном транспорте монтажниками, больше не
							нужно ждать доставку, а потом когда смогут приехать монтажники.
						</p>
						<h2 className={styles.delivery__subtitle}>Оплата</h2>
						<p className={styles.delivery__text}>
							Любой удобный способ. Оплата наличными, банковской картой, по
							счету для Юридических лиц, перевод через СПБ, QR-код, по ссылке
							для оплаты.
							<br />
							Доплата за изделие производится в момент доставки.
						</p>
					</div>
					<aside className={styles.delivery__aside}>
						<h3 className={styles["delivery__aside-title"]}>
							Каталог продукции и фурнитуры
						</h3>
						<Link className={styles["delivery__aside-link"]} to="/#products">
							<span>Посмотреть</span>
							<img src={clickHand} alt="" />
						</Link>
						<h3 className={styles["delivery__aside-title"]}>
							Примеры душевых перегородок в интерьере
						</h3>
						<Link className={styles["delivery__aside-link"]} to="/#examples">
							<span>Посмотреть</span>
							<img src={clickHand} alt="" />
						</Link>
						<h3 className={styles["delivery__aside-title"]}>
							Связаться с нами по телефону
						</h3>
						<a
							className={styles["delivery__aside-link"]}
							href="tel:+375447625856"
						>
							<span>Позвонить</span>
							<img src={clickHand} alt="" />
						</a>
						<h3 className={styles["delivery__aside-title"]}>
							Связаться с нами в Viber
						</h3>
						<a className={styles["delivery__aside-link"]} href="#">
							<span>Связаться</span>
							<img src={clickHand} alt="" />
						</a>
					</aside>
				</div>
			</div>
		</section>
	)
}
