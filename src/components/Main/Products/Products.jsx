import { useState } from "react"
import styles from "./Products.module.scss"
import FullScreenIcon from "../../../assets/main/fullscreen-icon.svg?react"
import { productsData } from "../../data/productsData"
import { Popup } from "./Popup/Popup"
import {
	disableBodyScrollIncludeScrollbar,
	enableBodyScrollIncludeScrollbar,
} from "../../../utils/setBodyScroll"

export const Products = () => {
	const [activeBtn, setActiveBtn] = useState("showers")
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	const [activePopupImage, setActivePopupImage] = useState(null)
	const [activePopupImageAlt, setActivePopupImageAlt] = useState(null)
	const [activePopupText, setActivePopupText] = useState(null)
	const [indexOfLastActiveImg, setIndexOfLastActiveImg] = useState(null)
	const closePopupBtnRef = useRef(null)

	useEffect(() => {
		if (!isPopupOpen && indexOfLastActiveImg !== null) {
			const imagesBtns = document.querySelectorAll(
				`.${styles["products__item-btn"]}`
			)
			const lastActiveImageBtn = imagesBtns[indexOfLastActiveImg]

			if (lastActiveImageBtn) {
				lastActiveImageBtn.focus()
			}
		}
	}),
		[isPopupOpen, indexOfLastActiveImg]

	const buttonsData = [
		{ text: "Формы душевых", activeBtnValue: "showers" },
		{ text: "Виды стекла", activeBtnValue: "glasses" },
		{ text: "Цвета фурнитуры", activeBtnValue: "furniture" },
		{ text: "Типы открывания дверей", activeBtnValue: "typeOpening" },
	]

	const handleButtonActive = (value) => {
		setActiveBtn(value)
	}

	const handlePopupOpen = (popupImageSrc, popupText, e, i) => {
		disableBodyScrollIncludeScrollbar()
		setIsPopupOpen(true)
		setActivePopupImage(popupImageSrc)
		setActivePopupText(popupText)
		setActivePopupImageAlt(e.target.alt)
		setIndexOfLastActiveImg(i)
		closePopupBtnRef.current.focus()
	}

	const handlePopupClose = () => {
		enableBodyScrollIncludeScrollbar()
		setIsPopupOpen(false)
		setActivePopupImage(null)
		setActivePopupText(null)
		setActivePopupImageAlt(" ")
	}

	const handleKeyDown = (e) => {
		if (e.key === "Tab") {
			e.preventDefault()
		}
		if (e.key === "Escape") {
			handlePopupClose()
		}
	}

	return (
		<section className={styles.products}>
			<div className="container">
				<h2 className={styles.products__title}>
					Душевые перегородки по вашим размерам
				</h2>
				<p className={styles.products__text}>
					Виды душевых перегородок и комплектующих
				</p>
				<div aria-live="polite" className="sr-only">
					{isPopupOpen ?
						`Открыто окно с иозбражением: ${activePopupText} `
					:	`Закрыто окно с иозбражением: ${activePopupText}`}
				</div>
				<div className={styles.products__types} role="tablist">
					{buttonsData.map((data, i) => {
						return (
							<button
								key={i}
								onClick={() => handleButtonActive(data.activeBtnValue)}
								className={`${styles["products__types-btn"]} ${activeBtn === data.activeBtnValue ? styles.active : ""}`}
								role="tab"
								aria-selected={activeBtn === data.activeBtnValue}
								id={`tab-${data.activeBtnValue}`}
								aria-controls={`panel-${data.activeBtnValue}`}
							>
								{data.text}
							</button>
						)
					})}
				</div>
				<div
					className={`${styles.products__items} ${activeBtn === "typeOpening" ? styles.oneRow : ""}`}
					id={`panel-${activeBtn}`}
					aria-labelledby={`tab-${activeBtn}`}
				>
					{productsData[activeBtn].map(
						({ id, title, imgSrc, popupImgSrc, alt }, i) => {
							return (
								<figure
									className={styles.products__item}
									key={id}
									onClick={(e) => handlePopupOpen(popupImgSrc, title, e, i)}
								>
									<button className={styles["products__item-btn"]}>
										<img
											className={styles["products__item-img"]}
											src={imgSrc}
											alt={alt}
										/>
										<FullScreenIcon />
									</button>
									<figcaption>
										<p className={styles["products__item-text"]}>{title}</p>
									</figcaption>
								</figure>
							)
						}
					)}
				</div>
				<Popup
					handlePopupClose={handlePopupClose}
					activePopupImage={activePopupImage}
					activePopupText={activePopupText}
					isPopupOpen={isPopupOpen}
				/>
			</div>
		</section>
	)
}
