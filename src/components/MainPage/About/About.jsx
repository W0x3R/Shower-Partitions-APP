import styles from "./About.module.scss"
import mainBgSmall from "../../../assets/MainPage/main-bg-small.webp"
import mainBgBig from "../../../assets/MainPage/main-bg-big.webp"
import featureCircle from "../../../assets/MainPage/feature-circle.svg?url"
import clickHand from "../../../assets/MainPage/click-hand.svg?url"
import { useContext, useEffect, useRef } from "react"
import PopupFormContext from "../../../context/PopupFormContext"
import showContentAnimation from "../../../utils/showContentAnimation"

const About = () => {
	const { handleFormPopupOpen } = useContext(PopupFormContext)
	const aboutContentRef = useRef(null)

	const featuresItemsText = [
		"Дизайнерские решения",
		"Тонкая рамка",
		"Надежная фурнитура",
	]

	useEffect(() => {
		showContentAnimation(aboutContentRef)
	}, [])

	return (
		<section className={styles.about}>
			<div className={styles.about__background} aria-hidden="true">
				<img
					className={styles["about__background-big"]}
					src={mainBgBig}
					alt=""
					width="1680"
					height="920"
				/>
				<img
					className={styles["about__background-small"]}
					src={mainBgSmall}
					alt=""
					width="500"
					height="920"
				/>
			</div>
			<div className="container">
				<div className={styles.about__content} ref={aboutContentRef}>
					<h1 className={styles.about__title}>
						<b>Душевые перегородки</b> на заказ в Гомеле
					</h1>
					<div className={styles.about__description}>
						<div className={styles["about__description-dots"]}>
							{new Array(4).fill(null).map((_, i) => {
								return (
									<span
										key={i}
										className={styles["about__description-dot"]}
									></span>
								)
							})}
						</div>
						<p className={styles["about__description-text"]}>
							Стильные ограждения для душевой премиум качества
						</p>
					</div>
					<div className={styles.about__features}>
						<div className={styles["about__features-item"]}>
							<img src={featureCircle} alt="" width="38" height="38" />
							<p className={styles["about__features-text"]}>
								<b>Закаленное стекло</b>
								<br />
								8-10 мм
							</p>
						</div>
						{featuresItemsText.map((itemText) => {
							return (
								<div className={styles["about__features-item"]} key={itemText}>
									<img src={featureCircle} alt="" width="38" height="38" />
									<p className={styles["about__features-text"]}>
										<b>{itemText}</b>
									</p>
								</div>
							)
						})}
					</div>
					<div className={styles.about__order}>
						<button
							className={styles["about__order-btn"]}
							type="button"
							onClick={(e) => handleFormPopupOpen(e)}
						>
							<span>Рассчитать цену по моим размерам</span>
							<img src={clickHand} alt="" width="26" height="26" />
						</button>
						<p className={styles["about__order-text"]}>
							<b>Перезвоним и проконсультируем </b>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
