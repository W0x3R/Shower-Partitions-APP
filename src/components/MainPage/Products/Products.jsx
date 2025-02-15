import Fancybox from "../../FancyApp/FancyBox"
import { useEffect, useRef, useState } from "react"
import styles from "./Products.module.scss"
import FullScreenIcon from "../../../assets/main/fullscreen-icon.svg?react"
import { productsData } from "../../../data/productsData"
import { useLocation } from "react-router-dom"

export const Products = () => {
	const [activeBtn, setActiveBtn] = useState("showers")
	const location = useLocation()
	const productsRef = useRef(null)

	const buttonsData = [
		{ text: "Формы душевых", activeBtnValue: "showers" },
		{ text: "Виды стекла", activeBtnValue: "glasses" },
		{ text: "Цвета фурнитуры", activeBtnValue: "furniture" },
		{ text: "Типы открывания дверей", activeBtnValue: "typeOpening" },
	]

	const handleButtonActive = (value) => {
		setActiveBtn(value)
	}

	useEffect(() => {
		const items = document.querySelectorAll(`.${styles.products__item}`)
		items.forEach((item, i) => {
			setTimeout(() => {
				item.classList.add(styles.visible)
			}, i * 40)
		})
	})

	useEffect(() => {
		if (location.hash === "#products" && productsRef.current) {
			productsRef.current.scrollIntoView({ behavior: "smooth" })
		}
	}, [location])

	return (
		<section className={styles.products} ref={productsRef}>
			<div className="container">
				<h2 className={styles.products__title}>
					Душевые перегородки по вашим размерам
				</h2>
				<p className={styles.products__text}>
					Виды душевых перегородок и комплектующих
				</p>
				<div className={styles.products__types} role="tablist">
					{buttonsData.map((data, i) => {
						return (
							<button
								key={i}
								onClick={() => handleButtonActive(data.activeBtnValue)}
								className={`${styles["products__types-btn"]} ${activeBtn === data.activeBtnValue ? styles.active : ""}`}
								type="button"
								role="tab"
								aria-selected={activeBtn === data.activeBtnValue}
								id={`tab-${data.activeBtnValue}`}
								aria-controls={`panel-${data.activeBtnValue}`}
							>
								<span>{data.text}</span>
							</button>
						)
					})}
				</div>
				<Fancybox
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
					<div
						className={`${styles.products__items} ${activeBtn === "typeOpening" ? styles.oneRow : ""}`}
						id={`panel-${activeBtn}`}
						aria-labelledby={`tab-${activeBtn}`}
					>
						{productsData[activeBtn].map(
							({ id, title, imgSrc, popupImgSrc, alt }, i) => {
								return (
									<figure className={styles.products__item} key={id}>
										<a
											className={styles["products__item-link"]}
											data-fancybox="gallery"
											href={popupImgSrc}
											data-caption={title}
										>
											<img
												className={styles["products__item-img"]}
												loading="lazy"
												alt={alt}
												src={imgSrc}
												width="342"
												height="234"
											/>
											<FullScreenIcon />
										</a>
										<figcaption>
											<p
												data-fancybox-trigger="gallery"
												data-fancybox-index={i}
												className={styles["products__item-text"]}
											>
												{title}
											</p>
										</figcaption>
									</figure>
								)
							}
						)}
					</div>
				</Fancybox>
			</div>
		</section>
	)
}
