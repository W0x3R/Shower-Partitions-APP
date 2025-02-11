import Fancybox from "../../FancyApp/FancyBox"
import ExamplesShowMoreImgBtn from "../../../assets/main/example-moreImg-btn.svg?react"
import FullScreenIcon from "../../../assets/main/fullscreen-icon.svg?react"
import styles from "./Examples.module.scss"
import examplesData from "../../data/examplesData"
import { useEffect, useMemo, useState } from "react"

export const Examples = () => {
	const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 500)
	const [visibleCount, setVisibleCount] = useState(isMobileView ? 3 : 6)
	const [stepIncrease, setStepIncrease] = useState(isMobileView ? 3 : 6)

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
		items.forEach((item, i) => {
			const timer = setTimeout(() => {
				item.classList.add(styles.visible)
			}, i * 40)
			return () => clearTimeout(timer)
		})
	}, [visibleCount])

	const renderedSlides = useMemo(() => {
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
	}, [visibleCount])

	return (
		<section className={styles.examples}>
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
					{renderedSlides}
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
