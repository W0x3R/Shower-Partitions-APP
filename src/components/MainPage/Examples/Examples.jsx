import styles from "./Examples.module.scss"
import Fancybox from "../../FancyApp/FancyBox"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import ExamplesShowMoreImgBtn from "../../../assets/main/example-moreImg-btn.svg?react"
import FullScreenIcon from "../../../assets/main/fullscreen-icon.svg?react"
import examplesData from "../../../data/examplesData"

const Examples = () => {
	const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 500)
	const [visibleCount, setVisibleCount] = useState(isMobileView ? 3 : 6)
	const [stepIncrease, setStepIncrease] = useState(isMobileView ? 3 : 6)

	const location = useLocation()
	const examplesRef = useRef(null)

	useEffect(() => {
		let prevWidth = window.innerWidth
		const handleResize = () => {
			const currentWidth = window.innerWidth

			if (
				(prevWidth <= 500 && currentWidth > 500) ||
				(prevWidth > 500 && currentWidth <= 500)
			) {
				const isMobile = currentWidth <= 500
				setIsMobileView(isMobile)
				setVisibleCount(isMobile ? 3 : 6)
				setStepIncrease(isMobile ? 3 : 6)
			}
			prevWidth = currentWidth
		}

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	const handleShowMorePictures = () => {
		setVisibleCount((prev) =>
			Math.min(prev + stepIncrease, examplesData.length)
		)

		const liveRegion = document.getElementById("aria-examples-live-status")
		if (liveRegion) {
			liveRegion.textContent = `Добавлены ${stepIncrease} новых фото`
			setTimeout(() => (liveRegion.textContent = ""), 100)
		}
	}

	useEffect(() => {
		const items = document.querySelectorAll(`.${styles.examples__item}`)
		const timeouts = []
		items.forEach((item, i) => {
			const timer = setTimeout(() => {
				item.classList.add(styles.visible)
			}, i * 40)
			timeouts.push(timer)
		})
		return () => timeouts.forEach(clearTimeout)
	}, [visibleCount])

	useEffect(() => {
		if (location.hash === "#examples" && examplesRef.current) {
			examplesRef.current.scrollIntoView({ behavior: "smooth" })
		}
	}, [location])

	const renderedSlides = () => {
		return examplesData
			.slice(0, visibleCount)
			.map(({ id, imgSrc, popupImgSrc, alt }) => (
				<div className={`${styles.examples__item}`} key={id}>
					<a
						className={styles["examples__item-link"]}
						data-fancybox="gallery"
						href={popupImgSrc}
					>
						<img
							className={styles["examples__item-img"]}
							loading="lazy"
							alt={alt}
							src={imgSrc}
							width="351"
							height="243"
						/>
						<FullScreenIcon aria-hidden="true" />
					</a>
					<div
						id="aria-examples-live-status"
						aria-live="polite"
						className="sr-only"
					></div>
				</div>
			))
	}

	return (
		<section className={styles.examples} ref={examplesRef}>
			<div className="container">
				<div className={styles.examples__texts}>
					<h2 className={styles.examples__title}>
						Душевые ограждения - примеры душевых перегородок в интерьере
					</h2>
					<p className={styles.examples__info}>Тренды 2022-2025 года</p>
				</div>
				<Fancybox
					styles={styles.examples__items}
					options={{
						Carousel: {
							infinite: true,
						},
						Toolbar: {
							display: {
								left: [],
								middle: ["infobar"],
								right: ["slideshow", "thumbs", "close"],
							},
						},
					}}
				>
					{renderedSlides()}
					{visibleCount < examplesData.length && (
						<button
							type="button"
							className={styles["examples__items-btn"]}
							onClick={handleShowMorePictures}
							aria-label={`Показать еще ${stepIncrease} фото`}
						>
							Загрузить еще фото
							<ExamplesShowMoreImgBtn aria-hidden="true" />
						</button>
					)}
				</Fancybox>
			</div>
		</section>
	)
}

export default Examples
