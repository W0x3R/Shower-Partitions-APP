import styles from "./CallUs.module.scss"
import { useContext } from "react"
import PopupFormContext from "../../../../context/PopupFormContext"

const CallUs = () => {
	const { handleFormPopupOpen } = useContext(PopupFormContext)

	return (
		<div className={`callUs ${styles.callUs}`}>
			<p
				className="header__texts header__animation"
				aria-labelledby="working-time-description-header"
			>
				<strong aria-hidden="true">
					<span>Звоните Пн-Пт</span> 9 - 18
				</strong>
				<span id="working-time-description-header" className="sr-only">
					Мы работаем с понедельника по пятницу с 9 утра до 6 часов вечера
				</span>
			</p>
			<a
				className={`callUs__link ${styles.callUs__link}`}
				href="tel:+375447854381"
				aria-label="Связаться с нами по номеру телефона"
				title="Позвонить по номеру +375 44 785 43 81"
			>
				<strong>+375 (44) 785-43-81</strong>
			</a>
			<button
				onClick={(e) => handleFormPopupOpen(e)}
				type="button"
				className={`callUs__btn ${styles.callUs__btn}`}
				aria-label="Нажмите, чтобы заказать обратный звонок"
			>
				Заказать звонок
			</button>
		</div>
	)
}

export default CallUs
