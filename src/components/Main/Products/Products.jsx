import { useState } from "react"
import styles from "./Products.module.scss"
import FullScreenIcon from "../../../assets/main/fullscreen-icon.svg?react"
import { productsData } from "../../data/productsData"

import { Popup } from "./Popup/Popup"
import {
	disableBodyScroll,
	enableBodyScroll,
} from "../../../utils/setBodyScroll"

export const Products = () => {
	const [activeBtn, setActiveBtn] = useState("showers")
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	const [activePopupImage, setActivePopupImage] = useState(null)
	const [activePopupText, setActivePopupText] = useState(null)

	const handleButtonActive = (value) => {
		setActiveBtn(value)
	}

	const handlePopupOpen = () => {
		disableBodyScroll()
		setIsPopupOpen(true)
	}

	const handlePopupClose = () => {
		enableBodyScroll()
		setIsPopupOpen(false)
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
				<div className={styles.products__types}>
					<button
						onClick={() => handleButtonActive("showers")}
						className={`${styles["products__types-btn"]} ${activeBtn === "showers" ? styles.active : ""}`}
					>
						Формы душевых
					</button>
					<button
						onClick={() => handleButtonActive("glasses")}
						className={`${styles["products__types-btn"]} ${activeBtn === "glasses" ? styles.active : ""}`}
					>
						Виды стекла
					</button>
					<button
						onClick={() => handleButtonActive("furniture")}
						className={`${styles["products__types-btn"]} ${activeBtn === "furniture" ? styles.active : ""}`}
					>
						Цвета фурнитуры
					</button>
					<button
						onClick={() => handleButtonActive("typeOpening")}
						className={`${styles["products__types-btn"]} ${activeBtn === "typeOpening" ? styles.active : ""}`}
					>
						Типы открывания дверей
					</button>
				</div>

				<div className={styles.products__items}>
					{productsData[activeBtn].map(({ id, title, src, popupSrc }) => {
						return (
							<div className={styles.products__item} key={id}>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault()
										handlePopupOpen()
										setActivePopupImage(popupSrc)
										setActivePopupText(title)
									}}
								>
									<img className={styles["products__item-img"]} src={src}></img>
									<FullScreenIcon />
								</a>

								<p className={styles["products__item-text"]}>{title}</p>
							</div>
						)
					})}
					<Popup
						handlePopupClose={handlePopupClose}
						activePopupImage={activePopupImage}
						activePopupText={activePopupText}
						isPopupOpen={isPopupOpen}
					/>
				</div>
			</div>
		</section>
	)
}
