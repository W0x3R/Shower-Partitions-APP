import { Link } from "react-router-dom"
import styles from "./AsideInfoWidget.module.scss"
import clickHand from "../../../assets/main/click-hand.svg?url"

export const AsideInfoWidget = () => {
	return (
		<aside className={styles.aside}>
			<h3 className={styles.aside__title}>Каталог продукции и фурнитуры</h3>
			<Link
				className={styles.aside__link}
				to="/#products"
				aria-label="Посмотреть каталог продукции и фурнитуры"
			>
				<span>Посмотреть</span>
				<img src={clickHand} alt="" />
			</Link>
			<h3 className={styles.aside__title}>
				Примеры душевых перегородок в интерьере
			</h3>
			<Link
				className={styles.aside__link}
				to="/#examples"
				aria-label="Посмотреть примеры душевых перегородок в интерьере"
			>
				<span>Посмотреть</span>
				<img src={clickHand} alt="" />
			</Link>
			<h3 className={styles.aside__title}>Связаться с нами по телефону</h3>
			<a
				className={styles.aside__link}
				href="tel:+375447625856"
				aria-label="Связаться с нами по номеру телефона"
			>
				<span>Позвонить</span>
				<img src={clickHand} alt="" />
			</a>
			<h3 className={styles.aside__title}>Связаться с нами в Viber</h3>
			<a
				className={styles.aside__link}
				href="#"
				rel="noopener noreferrer"
				aria-label="Связаться с нами в Viber"
			>
				<span>Связаться</span>
				<img src={clickHand} alt="" />
			</a>
		</aside>
	)
}
