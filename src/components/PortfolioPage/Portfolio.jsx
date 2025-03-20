import { useEffect, useState } from "react"
import styles from "./Portfolio.module.scss"
import portfolioData from "../../data/portfolioData"
import PortfolioItem from "./PortfolioItem"
import isDesktop from "../../utils/isDesktop"
import ShowMoreBtn from "../Widgets/ShowMoreBtn/ShowMoreBtn"

const Portfolio = () => {
	const [visibleCount, setVisibleCount] = useState(4)
	const stepIncrease = 4

	useEffect(() => {
		const items = document.querySelectorAll(
			`.${styles["portfolio__item-wrapper"]}`
		)
		const timeouts = []

		items.forEach((item, i) => {
			const timer = setTimeout(() => {
				item.classList.add(styles.visible)
			}, i * 40)
			timeouts.push(timer)
		})

		return () => timeouts.forEach(clearTimeout)
	}, [visibleCount])

	const handleShowMoreItems = () => {
		setVisibleCount((prev) =>
			Math.min(prev + stepIncrease, portfolioData.length)
		)

		const liveRegion = document.getElementById("aria-portfolio-live-status")
		if (liveRegion) {
			liveRegion.textContent = `Добавлены ${stepIncrease} новых фото`
			setTimeout(() => (liveRegion.textContent = ""), 100)
		}
	}

	const renderItems = () => {
		return portfolioData.slice(0, visibleCount).map((data) => {
			return <PortfolioItem key={data.mainId} data={data} />
		})
	}

	useEffect(() => {
		if (
			portfolioData.length % 2 !== 0 &&
			visibleCount % 2 !== 0 &&
			isDesktop()
		) {
			const lastItem = document.querySelectorAll(
				`.${styles["portfolio__item-wrapper"]}`
			)[visibleCount - 1]
			lastItem.classList.add(styles.row)
		}
	}, [visibleCount])

	return (
		<section className={styles.portfolio}>
			<div className="container">
				<h1 className={styles.portfolio__title}>
					<b>Портфолио</b>
				</h1>
				<div className={styles["portfolio__items"]}>{renderItems()}</div>
				{visibleCount < portfolioData.length && (
					<ShowMoreBtn
						onClick={handleShowMoreItems}
						aria={`Показать еще ${stepIncrease} фото`}
						text="Загрузить еще фото"
					/>
				)}
			</div>
		</section>
	)
}

export default Portfolio
