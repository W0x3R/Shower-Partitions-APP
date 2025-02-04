import { useEffect, useRef, useState } from "react"
import {
	showerPartitionPopup,
	cornerShowerPopup,
	showerCabinPopup,
	trapezoidalShowerPopup,
	swingingDoorPopup,
	rollingDoorPopup,
	alcoveDoorPopup,
	alcoveShowerPopup,
	transparentGlassPopup,
	brightenedGlassPopup,
	frostedGlassPopup,
	tonedGraphiteGlassPopup,
	blackFurniturePopup,
	goldFurniturePopup,
	bronzeFurniturePopup,
	nickelFurniturePopup,
	chromeFurniturePopup,
} from "../../data/productsData"
import ReactFocusLock from "react-focus-lock"
import QuestionsShowMoreImgBtn from "../../../assets/main/example-moreImg-btn.svg?react"
import { Popup } from "./Popup/Popup"
import styles from "./ShowerPartitionsDescription.module.scss"
import {
	disableBodyScrollIncludeScrollbar,
	enableBodyScrollIncludeScrollbar,
} from "../../../utils/setBodyScroll"

export const ShowerPartitionsDescription = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(null)
	const [activePopupImg, setActivePopupImg] = useState(null)
	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
	const firstLinkRef = useRef(null)

	const handlePopupOpenOnClick = (e, src) => {
		e.preventDefault()
		setIsPopupOpen(true)
		setActivePopupImg(src)
		disableBodyScrollIncludeScrollbar()
	}

	const handlePopupCloseOnClick = () => {
		setIsPopupOpen(false)
		setIsPopupOpen(false)
		setActivePopupImg(null)
		enableBodyScrollIncludeScrollbar()
	}

	const handlePopupOpenOnEnter = (e, src) => {
		if (e.code === "Enter") {
			e.preventDefault()
			setIsPopupOpen(true)
			setActivePopupImg(src)
			disableBodyScrollIncludeScrollbar()
		}
	}

	const handlePopupCloseOnEsc = (e) => {
		if (e.code === "Escape") {
			setIsPopupOpen(false)
			setActivePopupImg(null)
			enableBodyScrollIncludeScrollbar()
		}
	}

	useEffect(() => {
		if (isDescriptionExpanded === true) {
			firstLinkRef.current.focus({ preventScroll: true })
		}
	}, [isDescriptionExpanded])

	const handleDescriptionExpand = () => setIsDescriptionExpanded(true)

	return (
		<section className={styles.descriptions}>
			<div className="container">
				<h4 className={styles["descriptions__title"]}>
					Душевые перегородки из стекла в Гомеле
				</h4>
				<div
					className={`${styles.descriptions__block} ${isDescriptionExpanded ? styles.expanded : ""}`}
				>
					<p className={styles.descriptions__text}>
						Стеклянные душевые перегородки — современное решение для оформления
						и разделения ванной комнаты на функциональные зоны. В отличие от
						привычных шторок наши стеклянные двери и ограждения не только
						защищают помещение от брызг, но и придают ему элегантный, лаконичный
						вид. Изготовление душевых перегородок из стекла под заказ в Гомеле
						предлагает наша компания DZ System.
					</p>
					<h5 className={styles["descriptions__block-title"]}>
						<strong>Плюсы душевых перегородок из закаленного стекла</strong>
					</h5>
					<p className={styles.descriptions__text}>
						Все чаще душевые отгораживают с помощью специальных душевых уголков.
						Возрастание их популярности не случайно, ведь каленое стекло — один
						из лучших материалов для ванной. И вот почему:
					</p>
					<ul className={styles.descriptions__list}>
						<li className={styles.descriptions__item}>
							Гигиеничность. Стекло не является питательной средой для бактерий,
							грибов, а потому оно препятствует образованию плесени.
						</li>
						<li className={styles.descriptions__item}>
							Экологическая чистота. Стекло изготавливается из кварца —
							природного минерала (песка), безопасного для здоровья.
						</li>
						<li className={styles.descriptions__item}>
							Прочность. Ограждение из закаленного стекла отличается высокой
							механической прочностью, необходимой для стенок душевой. При
							одинаковой толщине оно в 5 раз прочнее обычного стекла, а потому
							оно не разобьется даже от сильного удара.
						</li>
						<li className={styles.descriptions__item}>
							Устойчивость к температурным перепадам. Обычное стекло при
							перепадах температур трескается, но если оно закаленное, такого не
							произойдет — поэтому можно принимать контрастный душ и не бояться,
							что перегородка лопнет.
						</li>
						<li className={styles.descriptions__item}>
							Безопасность. Даже если приложить к стеклу настолько большую силу,
							что оно разобьется (что маловероятно), полотно рассыплется на
							множество осколков с неострыми гранями — повредиться о них сложно.
						</li>
						<li className={styles.descriptions__item}>
							Простой уход. Не сложнее чем за зеркалом — достаточно распылить
							средство для стекла и вытереть сухой ветошью.
						</li>
						<li className={styles.descriptions__item}>
							Долговечность. При правильной эксплуатации стеклянная перегородка
							для душа может прослужить вечно.
						</li>
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
						ограждение по типу конструкции, способу остекления, открывания двери
						и другим параметрам.
					</p>
					<h6 className={styles["descriptions__block-subtitle"]}>
						Основные виды душевых конструкций
					</h6>
					<p className={styles.descriptions__text}>
						Мы выполняем задачи любой сложности и готовы к реализации самых
						нестандартных решений. Но в большинстве случаев к нам обращаются за
						изготовлением перегородок для душа следующего типа:
					</p>
					<ul className={styles.descriptions__list}>
						<li className={styles.descriptions__item}>
							<a
								ref={firstLinkRef}
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) => handlePopupOpenOnClick(e, showerPartitionPopup)}
								onKeyDown={(e) =>
									handlePopupOpenOnEnter(e, showerPartitionPopup)
								}
							>
								Линейное ограждение душевой&nbsp;
							</a>
							— стационарное стеклянное полотно с дверью (распашной, раздвижной)
							или без двери. Используется при расположении душа в нише или в
							дальнем углу ванной комнаты. Часто сочетается с дополнительными
							непрозрачными перегородками из того же материала, из которого
							выполнены стены.
						</li>
						<li className={styles.descriptions__item}>
							<a
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) => handlePopupOpenOnClick(e, cornerShowerPopup)}
								onKeyDown={(e) => handlePopupOpenOnEnter(e, cornerShowerPopup)}
							>
								Угловое ограждение душевой&nbsp;
							</a>
							— два полотна располагаются под углом 90 градусов друг к другу,
							образуя квадратную или прямоугольную зону. Иногда используются
							более сложные конструкции (с 3 или 4 стенками, примыкающими к углу
							ванной комнаты).
						</li>
						<li className={styles.descriptions__item}>
							<a
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) => handlePopupOpenOnClick(e, showerCabinPopup)}
							>
								П-образная перегородка душевой&nbsp;
							</a>
							— ограждение с 3 полотнами, примыкающее к одной стене и образующее
							с ней прямоугольную или квадратную зону.
						</li>
						<li className={styles.descriptions__item}>
							<a
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpenOnClick(e, trapezoidalShowerPopup)
								}
							>
								Трапециевидная перегородка душевой&nbsp;
							</a>
							— ограждение, которое вместе с одной из стен ванной образует
							трапецию
						</li>
					</ul>
					<p className={styles.descriptions__text}>
						Угловые, П-образные и трапециевидные душевые ограждения из стекла
						дополняются&nbsp;
						<a
							tabIndex={isDescriptionExpanded ? 0 : -1}
							className={styles["descriptions__item-link"]}
							onClick={(e) => handlePopupOpenOnClick(e, swingingDoorPopup)}
						>
							раздвижными&nbsp;
						</a>
						или&nbsp;
						<a
							tabIndex={isDescriptionExpanded ? 0 : -1}
							className={styles["descriptions__item-link"]}
							onClick={(e) => handlePopupOpenOnClick(e, rollingDoorPopup)}
						>
							откатными&nbsp;
						</a>
						дверями. Двери могут быть&nbsp;
						<a
							tabIndex={isDescriptionExpanded ? 0 : -1}
							className={styles["descriptions__item-link"]}
							onClick={(e) => handlePopupOpenOnClick(e, alcoveDoorPopup)}
						>
							одинарными
						</a>
						&nbsp; и&nbsp;
						<a
							tabIndex={isDescriptionExpanded ? 0 : -1}
							className={styles["descriptions__item-link"]}
							onClick={(e) => handlePopupOpenOnClick(e, alcoveShowerPopup)}
						>
							двойными
						</a>
						.
					</p>
					<h6 className={styles["descriptions__block-subtitle"]}>Остекление</h6>
					<p className={styles.descriptions__text}>
						Основу душевых перегородок составляет стекло. DZ System предлагает
						более 50 вариантов остекления, но наиболее популярными являются
						следующие виды стекла:
					</p>
					<ul className={styles.descriptions__list}>
						<li className={styles.descriptions__item}>
							<a
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpenOnClick(e, transparentGlassPopup)
								}
							>
								Прозрачное&nbsp;
							</a>
							— стандартное каленое стекло толщиной 8–10 мм.
						</li>
						<li className={styles.descriptions__item}>
							<a
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) => handlePopupOpenOnClick(e, brightenedGlassPopup)}
							>
								Осветленное&nbsp;
							</a>
							— максимально прозрачное полотно, обладающее наибольшей
							светопропускающей способностью и естественной передачей цвета.
						</li>
						<li className={styles.descriptions__item}>
							<a
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) => handlePopupOpenOnClick(e, frostedGlassPopup)}
							>
								Матовое&nbsp;
							</a>
							— полупрозрачное с матовой поверхностью.
						</li>
						<li className={styles.descriptions__item}>
							<a
								tabIndex={isDescriptionExpanded ? 0 : -1}
								className={styles["descriptions__item-link"]}
								onClick={(e) =>
									handlePopupOpenOnClick(e, tonedGraphiteGlassPopup)
								}
							>
								Цветное&nbsp;
							</a>
							(тонированное или окрашенное в массе) — бронзовое, черное, другие
							цвета.
						</li>
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
						Наша компания использует качественный алюминиевый профиль и надежную
						фурнитуру. Их также можно выбрать по цвету —{" "}
						<a
							tabIndex={isDescriptionExpanded ? 0 : -1}
							className={styles["descriptions__item-link"]}
							onClick={(e) => handlePopupOpenOnClick(e, blackFurniturePopup)}
						>
							черный
						</a>
						, под&nbsp;
						<a
							tabIndex={isDescriptionExpanded ? 0 : -1}
							className={styles["descriptions__item-link"]}
							onClick={(e) => handlePopupOpenOnClick(e, goldFurniturePopup)}
						>
							золото
						</a>
						,&nbsp;
						<a
							tabIndex={isDescriptionExpanded ? 0 : -1}
							className={styles["descriptions__item-link"]}
							onClick={(e) => handlePopupOpenOnClick(e, nickelFurniturePopup)}
						>
							никель
						</a>
						,&nbsp;
						<a
							tabIndex={isDescriptionExpanded ? 0 : -1}
							className={styles["descriptions__item-link"]}
							onClick={(e) => handlePopupOpenOnClick(e, bronzeFurniturePopup)}
						>
							бронзу
						</a>
						,&nbsp;
						<a
							tabIndex={isDescriptionExpanded ? 0 : -1}
							className={styles["descriptions__item-link"]}
							onClick={(e) => handlePopupOpenOnClick(e, chromeFurniturePopup)}
						>
							хром
						</a>
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
						<li className={styles.descriptions__item}>
							Полный цикл услуг — составление проекта, замер, изготовление,
							доставка, сборка.
						</li>
						<li className={styles.descriptions__item}>
							Производство душевых ограждений — в Гомеле.
						</li>
						<li className={styles.descriptions__item}>
							Высокое качество — остекления, профиля, фурнитуры.
						</li>
						<li className={styles.descriptions__item}>
							Срок изготовления перегородок — от 10 суток.
						</li>
						<li className={styles.descriptions__item}>
							Время доставки и сборки — 1 день.
						</li>
						<li className={styles.descriptions__item}>
							Гарантия — 1,5 года на остекление, фурнитуру и прочие материалы.
						</li>
						<li className={styles.descriptions__item}>
							Профессиональные монтажники — мастера делают работу аккуратно,
							обеспечивая сохранность имеющихся покрытий.
						</li>
						<li className={styles.descriptions__item}>
							Отсутствие лишних трат — конечная стоимость указывается в
							договоре, после завершения работ она не изменяется, доплачивать ни
							за что не придется.
						</li>
					</ul>
					<p className={styles.descriptions__text}>
						Чтобы заказать стеклянные душевые ограждения для ванной комнаты,
						позвоните нам или оставьте заявку на сайте. Тогда мы скоро
						перезвоним и обсудим детали, при необходимости выберем день для
						выезда мастера на замеры будущей душевой кабины.
					</p>
				</div>
				{!isDescriptionExpanded && (
					<button
						className={styles["descriptions__more-btn"]}
						onClick={handleDescriptionExpand}
						aria-label="Показать еще 2 вопроса"
					>
						Раскрыть полностью
						<QuestionsShowMoreImgBtn />
					</button>
				)}
			</div>
			{isPopupOpen && (
				<ReactFocusLock returnFocus>
					<Popup
						isPopupOpen={isPopupOpen}
						setIsPopupOpen={setIsPopupOpen}
						handlePopupCloseOnClick={handlePopupCloseOnClick}
						activePopupImg={activePopupImg}
						handlePopupCloseOnEsc={handlePopupCloseOnEsc}
					/>
				</ReactFocusLock>
			)}
		</section>
	)
}
