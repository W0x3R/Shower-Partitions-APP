import styles from "./FormPopup.module.scss"
import BlackCross from "../../../assets/MainPage/black-cross.svg?react"
import { useContext, useEffect, useState } from "react"
import ReactFocusLock from "react-focus-lock"
import PopupFormContext from "../../../context/PopupFormContext"
import CallBackForm from "../../Widgets/CallBackForm/CallBackForm"

const FormPopup = () => {
	const { isFormPopupOpen, handleFormPopupClose } = useContext(PopupFormContext)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (isFormPopupOpen) {
			setIsVisible(true)
		} else {
			setTimeout(() => setIsVisible(false), 200)
		}
	}, [isFormPopupOpen])

	return (
		<ReactFocusLock returnFocus disabled={!isFormPopupOpen}>
			<div
				className={`${styles.popup} ${isFormPopupOpen ? styles.visible : styles.hide}`}
				style={{ display: isVisible ? "flex" : "none" }}
				onMouseUp={(e) => handleFormPopupClose(e)}
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
						isBorderShow={true}
						ariaLabelledBy="contacts-popup-form-title"
					/>
				</div>
				<button
					type="button"
					className={styles.popup__btn}
					onClick={(e) => handleFormPopupClose(e)}
					aria-label="Закрыть изображение"
				>
					<BlackCross width={46} height={46} />
				</button>
			</div>
		</ReactFocusLock>
	)
}

export default FormPopup
