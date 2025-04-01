import { useContext } from "react"
import styles from "./ServicesCost.module.scss"
import clickHand from "../../assets/MainPage/click-hand.svg?url"
import articleBgImg from "../../assets/ArticlePage/bg.webp"
import priceDescriptionData from "../../data/pricePage/priceDescriptionData"
import PopupFormContext from "../../context/PopupFormContext"

const ServicesCost = () => {
	const { handleFormPopupOpen } = useContext(PopupFormContext)
	return (
		<section className={styles.cost}>
			<div className="container">
				<div className={styles["cost__title-wrapper"]}>
					<h1 className={styles.cost__title}>
						<b>Стоимость услуг</b>
					</h1>
					<img
						className={styles.cost__img}
						src={articleBgImg}
						alt=""
						width="1408"
						height="430"
					/>
				</div>
				<h2 className={styles.cost__subtitle}>
					Стоимость услуг доставки и монтажа: все, что вам нужно знать о наших
					изделиях
				</h2>
				{priceDescriptionData.map(({ id, text }) => {
					return (
						<p key={id} className={styles.cost__description}>
							{text}
						</p>
					)
				})}
				<button
					className={styles["cost__order-btn"]}
					type="button"
					onClick={(e) => handleFormPopupOpen(e)}
				>
					<span>Заказать консультацию по ценам</span>
					<img src={clickHand} alt="" />
				</button>
			</div>
		</section>
	)
}

export default ServicesCost
