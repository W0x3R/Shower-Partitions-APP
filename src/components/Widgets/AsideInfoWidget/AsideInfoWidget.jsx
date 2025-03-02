import styles from "./AsideInfoWidget.module.scss"
import { Link } from "react-router-dom"
import { useContext } from "react"
import clickHand from "../../../assets/main/click-hand.svg?url"
import PopupFormContext from "../../../context/PopupFormContext"

const AsideInfoWidget = ({ sticky }) => {
	const { handleFormPopupOpen } = useContext(PopupFormContext)

	return (
		<aside className={`${styles.aside} ${sticky ? styles.sticky : ""}`}>
			<h3 className={styles.aside__title}>Заказать обратный звонок</h3>
			<button
				onClick={(e) => handleFormPopupOpen(e)}
				className={styles.aside__link}
				aria-label="Заказать обратный звонок"
			>
				<span>Заказать</span>
				<img src={clickHand} alt="" />
			</button>
			<h3 className={styles.aside__title}>Связаться с нами по телефону</h3>
			<a
				className={styles.aside__link}
				href="tel:+375447625856"
				aria-label="Связаться с нами по номеру телефона"
			>
				<span>Позвонить</span>
				<img src={clickHand} alt="" />
			</a>
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
		</aside>
	)
}

export default AsideInfoWidget
