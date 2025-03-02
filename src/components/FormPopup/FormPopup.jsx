import styles from "./FormPopup.module.scss"
import { useContext, useEffect, useState } from "react"
import ReactFocusLock from "react-focus-lock"
import BlackCross from "../../assets/main/black-cross.svg?react"
import PopupFormContext from "../../context/PopupFormContext"
import CallBackForm from "../Widgets/CallBackForm/CallBackForm"

const FormPopup = () => {
	const { isFormPopupOpen, handleFormPopupClose } = useContext(PopupFormContext)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (isFormPopupOpen) {
			setIsVisible(true)
		} else {
			setTimeout(() => setIsVisible(false), 400)
		}
	}, [isFormPopupOpen])

	return (
		<ReactFocusLock returnFocus disabled={!isFormPopupOpen}>
			<div
				className={`${styles.popup} ${isFormPopupOpen ? styles.visible : styles.hide}`}
				style={{ display: isVisible ? "flex" : "none" }}
				onClick={(e) => handleFormPopupClose(e)}
				onKeyDown={(e) => handleFormPopupClose(e)}
				role="dialog"
				aria-modal="true"
				aria-label="Вы можете закрыть это окно с помощью нажатия клавиши escape"
				aria-hidden={!isFormPopupOpen}
			>
				<div className={styles.popup__content}>
					<CallBackForm
						title="Свяжемся с Вами в течение дня, заполните форму"
						isEmailShow={false}
					/>
					<button
						type="button"
						className={styles.popup__btn}
						onClick={(e) => handleFormPopupClose(e)}
						aria-label="Закрыть изображение"
					>
						<BlackCross />
					</button>
				</div>
			</div>
		</ReactFocusLock>
	)
}

export default FormPopup
