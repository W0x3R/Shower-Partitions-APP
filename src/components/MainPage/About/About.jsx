import styles from "./About.module.scss"
import featureCircle from "../../../assets/MainPage/feature-circle.svg?url"
import clickHand from "../../../assets/MainPage/click-hand.svg?url"
import { useContext } from "react"
import PopupFormContext from "../../../context/PopupFormContext"

const About = () => {
	const { handleFormPopupOpen } = useContext(PopupFormContext)

	const featuresItemsText = [
		"Дизайнерские решения",
		"Тонкая рамка",
		"Надежная фурнитура",
	]

	return (
		<section className={`about ${styles.about}`}>
			<div className={`about__background`} aria-hidden="true"></div>
			<div className="container">
				<div className={`about__content ${styles.about__content}`}>
					<h1 className={`about__title ${styles.about__title}`}>
						<b>Душевые перегородки</b> на заказ в Гомеле
					</h1>
					<div className={`about__description ${styles.about__description}`}>
						<div
							className={`about__description-dots ${styles["about__description-dots"]}`}
						>
							{new Array(4).fill(null).map((_, i) => {
								return (
									<span
										key={i}
										className={`about__description-dot ${styles["about__description-dot"]}`}
									></span>
								)
							})}
						</div>
						<p
							className={`about__description-text ${styles["about__description-text"]}`}
						>
							Стильные ограждения для душевой премиум качества
						</p>
					</div>
					<div className={`about__features ${styles.about__features}`}>
						<div
							className={`about__features-item ${styles["about__features-item"]}`}
						>
							<img src={featureCircle} alt="" width="38" height="38" />
							<p
								className={`about__features-text ${styles["about__features-text"]}`}
							>
								<b>Закаленное стекло</b>
								<br />
								8-10 мм
							</p>
						</div>
						{featuresItemsText.map((itemText) => {
							return (
								<div
									className={`about__features-item  ${styles["about__features-item"]}`}
									key={itemText}
								>
									<img src={featureCircle} alt="" width="38" height="38" />
									<p
										className={`about__features-text ${styles["about__features-text"]}`}
									>
										<b>{itemText}</b>
									</p>
								</div>
							)
						})}
					</div>
					<div className={`about__order ${styles.about__order}`}>
						<button
							className={`about__order-btn ${styles["about__order-btn"]}`}
							type="button"
							onClick={(e) => handleFormPopupOpen(e)}
						>
							<span>Рассчитать цену по моим размерам</span>
							<img src={clickHand} alt="" width="26" height="26" />
						</button>
						<p className={`about__order-text ${styles["about__order-text"]}`}>
							<b>Перезвоним и проконсультируем </b>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
