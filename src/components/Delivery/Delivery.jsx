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
					<aside className={styles.delivery__aside}>
						<h3 className={styles["delivery__aside-title"]}>
							Каталог продукции и фурнитуры
						</h3>
						<Link
							className={styles["delivery__aside-link"]}
							to="/#products"
							aria-label="Посмотреть каталог продукции и фурнитуры"
						>
							<span>Посмотреть</span>
							<img src={clickHand} alt="" />
						</Link>
						<h3 className={styles["delivery__aside-title"]}>
							Примеры душевых перегородок в интерьере
						</h3>
						<Link
							className={styles["delivery__aside-link"]}
							to="/#examples"
							aria-label="Посмотреть примеры душевых перегородок в интерьере"
						>
							<span>Посмотреть</span>
							<img src={clickHand} alt="" />
						</Link>
						<h3 className={styles["delivery__aside-title"]}>
							Связаться с нами по телефону
						</h3>
						<a
							className={styles["delivery__aside-link"]}
							href="tel:+375447625856"
							aria-label="Связаться с нами по номеру телефона"
						>
							<span>Позвонить</span>
							<img src={clickHand} alt="" />
						</a>
						<h3 className={styles["delivery__aside-title"]}>
							Связаться с нами в Viber
						</h3>
						<a
							className={styles["delivery__aside-link"]}
							href="#"
							rel="noopener noreferrer"
							aria-label="Связаться с нами в Viber"
						>
							<span>Связаться</span>
							<img src={clickHand} alt="" />
						</a>
					</aside>
				</div>
			</div>
		</section>
	)
}
