import styles from "./ShowerPartitionsDescription.module.scss"
import ReactFocusLock from "react-focus-lock"
import { useEffect, useState } from "react"
import {
	swingingDoorPopupImg,
	rollingDoorPopupImg,
	alcoveDoorPopupImg,
	alcoveShowerPopupImg,
	blackFurniturePopupImg,
	goldFurniturePopupImg,
	bronzeFurniturePopupImg,
	nickelFurniturePopupImg,
	chromeFurniturePopupImg,
} from "../../../data/productsData"
import QuestionsShowMoreImgBtn from "../../../assets/main/example-moreImg-btn.svg?react"
import Popup from "./Popup/Popup"
import {
	disableBodyScrollIncludeScrollbar,
	enableBodyScrollIncludeScrollbar,
} from "../../../utils/setBodyScroll"
import firstListData from "../../../data/showerPartitionsDescriptionData/firstListData"
import showerTypesData from "../../../data/showerPartitionsDescriptionData/showerTypesData"
import setTypeOfDoorsAltData from "../../../data/showerPartitionsDescriptionData/typeOfDoorsAltData"
import typeOfGlassesData from "../../../data/showerPartitionsDescriptionData/typeOfGlassesData"
import setTypeOfFurnitureAltData from "../../../data/showerPartitionsDescriptionData/typeOfFurnitureAltData"
import reasonsListData from "../../../data/showerPartitionsDescriptionData/reasonsListData"

const ShowerPartitionsDescription = () => {
	const [popupData, setPopupData] = useState({
		isOpen: false,
		img: null,
		alt: null,
	})
	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

	const handlePopupOpen = (e, src, alt) => {
		if (e.type === "click" || (e.type === "keydown" && e.code === "Enter")) {
			e.preventDefault()
			setPopupData({ isOpen: true, img: src, alt })
			disableBodyScrollIncludeScrollbar()
		}
	}

	const handlePopupClose = (e) => {
		if (e.type === "click" || (e.type === "keydown" && e.code === "Escape")) {
			setPopupData({ isOpen: false, img: null, alt: null })
			enableBodyScrollIncludeScrollbar()
		}
	}

	useEffect(() => {
		const firstLink = document.querySelector(
			`.${styles["descriptions__item-link"]}`
		)
		if (isDescriptionExpanded === true) {
			firstLink.focus({ preventScroll: true })
		}
	}, [isDescriptionExpanded])

	const handleDescriptionExpand = () => setIsDescriptionExpanded(true)

	return (
		<section className={styles.descriptions}>
			<div className="container">
				<h4 className={styles["descriptions__title"]}>
					Душевые перегородки из стекла в Гомеле
				</h4>
				<div className={styles.descriptions__block}>
					<p className={styles.descriptions__text}>
						Стеклянные душевые перегородки — современное решение для оформления
						и разделения ванной комнаты на функциональные зоны. В отличие от
						привычных шторок наши стеклянные двери и ограждения не только
						защищают помещение от брызг, но и придают ему элегантный, лаконичный
						вид. Изготовление душевых перегородок из стекла под заказ в Гомеле
						предлагает наша компания DZ System.
					</p>
					<div
						className={`${styles["descriptions__block-hidden"]} ${isDescriptionExpanded ? styles.visible : ""}`}
					>
						<h5 className={styles["descriptions__block-title"]}>
							<strong>Плюсы душевых перегородок из закаленного стекла</strong>
						</h5>
						<p className={styles.descriptions__text}>
							Все чаще душевые отгораживают с помощью специальных душевых
							уголков. Возрастание их популярности не случайно, ведь каленое
							стекло — один из лучших материалов для ванной. И вот почему:
						</p>
						<ul className={styles.descriptions__list}>
							{firstListData.map(({ id, text }) => {
								return (
									<li key={id} className={styles.descriptions__item}>
										{text}
									</li>
								)
							})}
						</ul>
						<p className={styles.descriptions__text}>
							Душевое ограждение из стекла удачно вписывается в ванную,
							выполненную в любом современном стиле. За счет прозрачности она не
							скрадывает пространства и сохраняет помещение просторным, светлым,
							уютным. А широкие возможности для обработки стеклянного полотна
							позволяют реализовать тысячи уникальных дизайнерских решений
							душевой.
						</p>
						<h5 className={styles["descriptions__block-title"]}>
							Виды душевых перегородок — что выбрать?
						</h5>
						<p className={styles.descriptions__text}>
							Изготовим душевые ограждения на заказ — у нас нет готовых моделей,
							потому что знаем, как важно, чтобы изделий максимально вписывалось
							именно в вашу ванную. Поэтому сначала мы просим клиента выбрать
							ограждение по типу конструкции, способу остекления, открывания
							двери и другим параметрам.
						</p>
						<h6 className={styles["descriptions__block-subtitle"]}>
							Основные виды душевых конструкций
						</h6>
						<p className={styles.descriptions__text}>
							Мы выполняем задачи любой сложности и готовы к реализации самых
							нестандартных решений. Но в большинстве случаев к нам обращаются
							за изготовлением перегородок для душа следующего типа:
						</p>
						<ul className={styles.descriptions__list}>
							{showerTypesData.map(({ id, title, text, aria, imgSrc, alt }) => {
								return (
									<li key={id} className={styles.descriptions__item}>
										<button
											tabIndex={isDescriptionExpanded ? 0 : -1}
											className={styles["descriptions__item-link"]}
											onClick={(e) => handlePopupOpen(e, imgSrc, alt)}
											onKeyDown={(e) => handlePopupOpen(e, imgSrc, alt)}
											aria-label={aria}
										>
											{title}&nbsp;
										</button>
										{text}
									</li>
								)
							})}
						</ul>
						<p className={styles.descriptions__text}>
							Угловые, П-образные и трапециевидные душевые ограждения из стекла
							дополняются&nbsp;
							<button
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpen(
										e,
										swingingDoorPopupImg,
										setTypeOfDoorsAltData("развижными")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										swingingDoorPopupImg,
										setTypeOfDoorsAltData("развижными")
									)
								}
								aria-label="Открыть изображение душевой с раздвижными дверями"
							>
								раздвижными
							</button>
							,&nbsp;или&nbsp;
							<button
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpen(
										e,
										rollingDoorPopupImg,
										setTypeOfDoorsAltData("откатными")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										rollingDoorPopupImg,
										setTypeOfDoorsAltData("откатными")
									)
								}
								aria-label="Открыть изображение душевой с откатными дверями"
							>
								откатными&nbsp;
							</button>
							дверями. Двери могут быть&nbsp;
							<button
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpen(
										e,
										alcoveDoorPopupImg,
										setTypeOfDoorsAltData("одинарными")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										alcoveDoorPopupImg,
										setTypeOfDoorsAltData("одинарными")
									)
								}
								aria-label="Открыть изображение душевой с одинарными дверями"
							>
								одинарными
							</button>
							&nbsp; и&nbsp;
							<button
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpen(
										e,
										alcoveShowerPopupImg,
										setTypeOfDoorsAltData("двойными")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										alcoveShowerPopupImg,
										setTypeOfDoorsAltData("двойными")
									)
								}
								aria-label="Открыть изображение душевой с двойными дверями"
							>
								двойными
							</button>
							.
						</p>
						<h6 className={styles["descriptions__block-subtitle"]}>
							Остекление
						</h6>
						<p className={styles.descriptions__text}>
							Основу душевых перегородок составляет стекло. DZ System предлагает
							более 50 вариантов остекления, но наиболее популярными являются
							следующие виды стекла:
						</p>
						<ul className={styles.descriptions__list}>
							{typeOfGlassesData.map(
								({ id, title, spanText, aria, imgSrc, alt }) => {
									return (
										<li key={id} className={styles.descriptions__item}>
											<button
												tabIndex={isDescriptionExpanded ? 0 : -1}
												className={styles["descriptions__item-link"]}
												onClick={(e) => handlePopupOpen(e, imgSrc, alt)}
												onKeyDown={(e) => handlePopupOpen(e, imgSrc, alt)}
												aria-label={aria}
											>
												{title}&nbsp;
											</button>
											<span>{spanText}</span>
										</li>
									)
								}
							)}
						</ul>
						<p className={styles.descriptions__text}>
							Перегородки и раздвижные душевые двери могут быть дополнены
							зеркальными, глянцевыми полотнами, а также стеклами с рисунком,
							выполненным с помощью пескоструйной обработки — все зависит от
							пожеланий клиента и дизайна интерьера ванной комнаты.
						</p>
						<h6 className={styles["descriptions__block-subtitle"]}>
							Профиль и фурнитура
						</h6>
						<p className={styles.descriptions__text}>
							Наша компания использует качественный алюминиевый профиль и
							надежную фурнитуру. Их также можно выбрать по цвету —&nbsp;
							<button
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpen(
										e,
										blackFurniturePopupImg,
										setTypeOfFurnitureAltData("черного")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										blackFurniturePopupImg,
										setTypeOfFurnitureAltData("черного")
									)
								}
								aria-label="Открыть изображение с фурнитурой черного цвета"
							>
								черный
							</button>
							, под&nbsp;
							<button
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpen(
										e,
										goldFurniturePopupImg,
										setTypeOfFurnitureAltData("золотистого")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										goldFurniturePopupImg,
										setTypeOfFurnitureAltData("золотистого")
									)
								}
								aria-label="Открыть изображение с фурнитурой золотистого цвета"
							>
								золото
							</button>
							,&nbsp;
							<button
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpen(
										e,
										nickelFurniturePopupImg,
										setTypeOfFurnitureAltData("никелевого")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										nickelFurniturePopupImg,
										setTypeOfFurnitureAltData("никелевого")
									)
								}
								aria-label="Открыть изображение с фурнитурой цвета никель"
							>
								никель
							</button>
							,&nbsp;
							<button
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpen(
										e,
										bronzeFurniturePopupImg,
										setTypeOfFurnitureAltData("бронзового")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										bronzeFurniturePopupImg,
										setTypeOfFurnitureAltData("бронзового")
									)
								}
								aria-label="Открыть изображение с фурнитурой бронзового цвета"
							>
								бронзу
							</button>
							,&nbsp;
							<button
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpen(
										e,
										chromeFurniturePopupImg,
										setTypeOfFurnitureAltData("хромового")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										chromeFurniturePopupImg,
										setTypeOfFurnitureAltData("хромового")
									)
								}
								aria-label="Открыть изображение с фурнитурой цвета хром"
							>
								хром
							</button>
							&nbsp; и другие металлы.
						</p>
						<h6 className={styles["descriptions__block-subtitle"]}>
							Душевые перегородки под заказ от производителя
						</h6>
						<p className={styles.descriptions__text}>
							Мы можем изготовить изделий по уже готовому или самостоятельному
							разработанному проекту с визуализацией, чтобы вы могли оценить
							результат заранее.
						</p>
						<p className={styles.descriptions__text}>
							Вот почему клиенты выбирают нас:
						</p>
						<ul className={styles.descriptions__list}>
							{reasonsListData.map(({ id, text }) => {
								return (
									<li key={id} className={styles.descriptions__item}>
										{text}
									</li>
								)
							})}
						</ul>
						<p className={styles.descriptions__text}>
							Чтобы заказать стеклянные душевые ограждения для ванной комнаты,
							позвоните нам или оставьте заявку на сайте. Тогда мы скоро
							перезвоним и обсудим детали, при необходимости выберем день для
							выезда мастера на замеры будущей душевой кабины.
						</p>
					</div>
				</div>
				{!isDescriptionExpanded && (
					<button
						type="button"
						className={styles["descriptions__more-btn"]}
						onClick={handleDescriptionExpand}
						aria-label="Показать еще 2 вопроса"
					>
						Раскрыть полностью
						<QuestionsShowMoreImgBtn aria-hidden="true" />
					</button>
				)}
			</div>
			<ReactFocusLock returnFocus disabled={!popupData.isOpen}>
				<Popup
					isPopupOpen={popupData.isOpen}
					handlePopupClose={handlePopupClose}
					activePopupImg={popupData.img}
					activePopupAlt={popupData.alt}
				/>
			</ReactFocusLock>
		</section>
	)
}

export default ShowerPartitionsDescription
