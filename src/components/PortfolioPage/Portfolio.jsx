import styles from "./Portfolio.module.scss"
import errorImg from "../../assets/content-unavailable.png"
import clickHand from "../../assets/MainPage/click-hand.svg?url"
import ShowMoreBtn from "../Widgets/ShowMoreBtn/ShowMoreBtn"
import { useEffect, useState } from "react"
import PortfolioItem from "./PortfolioItem"
import isDesktop from "../../utils/isDesktop"
import { Link } from "react-router-dom"

const Portfolio = () => {
	const [portfolioData, setPortfolioData] = useState([])
	const [isDataError, setIsDataError] = useState("")
	const [isLoading, setIsLoading] = useState(true)
	const [visibleCount, setVisibleCount] = useState(4)
	const stepIncrease = 4

	useEffect(() => {
		const portfolioDataUrl =
			"https://res.cloudinary.com/dpvqykdi9/raw/upload/v1745589746/portfolioData_wkekkh.json"

		const getPortfolioData = async () => {
			try {
				const res = await fetch(portfolioDataUrl)
				const data = await res.json()
				setPortfolioData(data)
			} catch {
				setIsDataError("Ошибка получения данных")
			} finally {
				setIsLoading(false)
			}
		}
		getPortfolioData()
	}, [])

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
	}, [portfolioData, visibleCount])

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
		const main = document.querySelector("main")
		main.style.background = "var(--gray-bg-gradient)"

		return () => (main.style.background = "none")
	}, [])

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
				{isDataError && (
					<>
						<img
							className={styles["portfolio__error-img"]}
							src={errorImg}
							alt="Изображение, которое указывает на то,что контент временно недоступен"
							width="500"
							height="477"
							loading="lazy"
						/>
						<p className={styles["portfolio__error-text"]}>
							К сожалению, изображения временно недоступны. Попробуйте повторить
							действие чуть позже.
						</p>
						<Link
							className={styles["portfolio__error-link"]}
							to="/"
							aria-label="Перейти на главную страницу"
						>
							<span>Перейти на главную</span>
							<img src={clickHand} alt="" width="26" height="26" />
						</Link>
					</>
				)}
				<div className={styles["portfolio__items"]}>
					{!isLoading && !isDataError && renderItems()}
				</div>
				<div
					id="aria-portfolio-live-status"
					aria-live="polite"
					className="sr-only"
				></div>
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
