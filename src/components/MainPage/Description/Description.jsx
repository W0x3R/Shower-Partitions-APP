import styles from "./Description.module.scss"
import ReactFocusLock from "react-focus-lock"
import { useEffect, useState } from "react"
import {
	swingingDoorImg,
	rollingDoorImg,
	alcoveDoorImg,
	alcoveShowerImg,
	blackFurnitureImg,
	goldFurnitureImg,
	bronzeFurnitureImg,
	nickelFurnitureImg,
	chromeFurnitureImg,
} from "../../../data/mainPage/productsData"
import Popup from "./Popup/Popup"
import {
	disableBodyScrollIncludeScrollbar,
	enableBodyScrollIncludeScrollbar,
} from "../../../utils/setBodyScroll"
import showerTypesData from "../../../data/mainPage/descriptionsData/showerTypesData"
import setTypeOfDoorsAltData from "../../../data/mainPage/descriptionsData/typeOfDoorsAltData"
import typeOfGlassesData from "../../../data/mainPage/descriptionsData/typeOfGlassesData"
import setTypeOfFurnitureAltData from "../../../data/mainPage/descriptionsData/typeOfFurnitureAltData"
import reasonsListData from "../../../data/mainPage/descriptionsData/reasonsListData"
import benefitsData from "../../../data/mainPage/descriptionsData/benefitsData"
import ShowMoreBtn from "../../Widgets/ShowMoreBtn/ShowMoreBtn"

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
							{benefitsData.map(({ id, text }) => {
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
										swingingDoorImg,
										setTypeOfDoorsAltData("развижными")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										swingingDoorImg,
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
										rollingDoorImg,
										setTypeOfDoorsAltData("откатными")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										rollingDoorImg,
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
										alcoveDoorImg,
										setTypeOfDoorsAltData("одинарными")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										alcoveDoorImg,
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
										alcoveShowerImg,
										setTypeOfDoorsAltData("двойными")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										alcoveShowerImg,
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
										blackFurnitureImg,
										setTypeOfFurnitureAltData("черного")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										blackFurnitureImg,
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
										goldFurnitureImg,
										setTypeOfFurnitureAltData("золотистого")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										goldFurnitureImg,
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
										nickelFurnitureImg,
										setTypeOfFurnitureAltData("никелевого")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										nickelFurnitureImg,
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
										bronzeFurnitureImg,
										setTypeOfFurnitureAltData("бронзового")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										bronzeFurnitureImg,
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
										chromeFurnitureImg,
										setTypeOfFurnitureAltData("хромового")
									)
								}
								onKeyDown={(e) =>
									handlePopupOpen(
										e,
										chromeFurnitureImg,
										setTypeOfFurnitureAltData("хромового")
									)
								}
								aria-label="Открыть изображение с фурнитурой цвета хром"
							>
								хром
							</button>
							&nbsp; и другие металлы.
						</p>
						<h6 className={styles["descriptions__block-title"]}>
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
					<ShowMoreBtn
						onClick={handleDescriptionExpand}
						aria="Показать еще 2 вопроса"
						text="Раскрыть полностью"
					/>
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
