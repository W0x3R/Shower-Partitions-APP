import { useContext, useEffect, useState } from "react"
import ReactFocusLock from "react-focus-lock"
import PopupFormContext from "../../context/PopupFormContext"
import { CallBackForm } from "../Widgets/CallBackForm/CallBackForm"
import styles from "./FormPopup.module.scss"
import BlackCross from "../../assets/main/black-cross.svg?react"

export const FormPopup = () => {
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
					<CallBackForm isPopupOpen={isFormPopupOpen} />
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
