import styles from "./Examples.module.scss"
import FullScreenIcon from "../../../assets/MainPage/fullscreen-icon.svg?react"
import errorImg from "../../../assets/content-unavailable.png"
import ShowMoreBtn from "../../Widgets/ShowMoreBtn/ShowMoreBtn"
import Fancybox from "../../FancyApp/FancyBox"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

const Examples = () => {
	const [examplesData, setExamplesData] = useState([])
	const [isDataError, setIsDataError] = useState("")
	const [isLoading, setIsLoading] = useState(true)
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
		const examplesDataUrl =
			"https://res.cloudinary.com/dpvqykdi9/raw/upload/v1744802085/examplesData_elu58v.json"
		const getExamplesData = async () => {
			try {
				const res = await fetch(examplesDataUrl)
				const examplesData = await res.json()
				setExamplesData(examplesData)
			} catch {
				setIsDataError("Ошибка получения данных")
			} finally {
				setIsLoading(false)
			}
		}
		getExamplesData()
	}, [])

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
	}, [examplesData, visibleCount])

	useEffect(() => {
		if (location.hash === "#examples" && examplesRef.current) {
			examplesRef.current.scrollIntoView({ behavior: "smooth" })
		}
	}, [location])

	const renderedSlides = () => {
		return examplesData.slice(0, visibleCount).map(({ id, alt, imgSrc }) => (
			<div className={`${styles.examples__item}`} key={id}>
				<a
					className={styles["examples__item-link"]}
					data-fancybox="gallery"
					href={imgSrc}
				>
					<img
						className={styles["examples__item-img"]}
						src={imgSrc}
						width="351"
						height="243"
						alt={alt}
						loading="lazy"
					/>
					<FullScreenIcon aria-hidden={true} width={26} height={26} />
				</a>
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
					{isDataError && (
						<>
							<img
								className={styles["examples__error-img"]}
								src={errorImg}
								alt="Изображение, которое указывает на то,что контент временно недоступен"
								width="500"
								height="477"
								loading="lazy"
							/>
							<p className={styles["examples__error-text"]}>
								К сожалению, изображения временно недоступны.Попробуйте
								повторить действие чуть позже.
							</p>
						</>
					)}
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
					{!isLoading && !isDataError && renderedSlides()}

					<div
						id={`aria-examples-live-status`}
						aria-live="polite"
						className="sr-only"
					></div>
					{visibleCount < examplesData.length && (
						<ShowMoreBtn
							onClick={handleShowMorePictures}
							aria={`Показать еще ${stepIncrease} фото`}
							text="Загрузить еще фото"
						/>
					)}
				</Fancybox>
			</div>
		</section>
	)
}

export default Examples
