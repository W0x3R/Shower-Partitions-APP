import styles from "./Popup.module.scss"
import { useEffect, useRef, useState } from "react"
import BlackCross from "../../../../assets/main/black-cross.svg?react"

const Popup = ({
	isPopupOpen,
	handlePopupClose,
	activePopupImg,
	activePopupAlt,
}) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (isPopupOpen) {
			setIsVisible(true)
		} else {
			setTimeout(() => setIsVisible(false), 400)
		}
	}, [isPopupOpen])

	const popupRef = useRef(null)

	useEffect(() => {
		if (isPopupOpen) {
			setTimeout(() => {
				popupRef.current?.focus()
			}, 50)
		}
	}, [isPopupOpen])

	return (
		<div
			className={`${styles.popup} ${isPopupOpen ? styles.visible : styles.hide}`}
			style={{ display: isVisible ? "flex" : "none" }}
			onClick={(e) => handlePopupClose(e)}
			onKeyDown={(e) => handlePopupClose(e)}
			role="dialog"
			aria-modal="true"
			aria-label="Вы можете закрыть это окно с помощью нажатия клавиши escape"
			aria-hidden={!isPopupOpen}
		>
			<div
				className={styles.popup__content}
				ref={popupRef}
				tabIndex={isPopupOpen ? 0 : -1}
			>
				<img
					className={styles.popup__img}
					src={activePopupImg}
					onClick={(e) => e.stopPropagation()}
					alt={activePopupAlt}
				/>
				<button
					type="button"
					className={styles.popup__btn}
					onClick={(e) => handlePopupClose(e)}
					aria-label="Закрыть изображение"
				>
					<BlackCross />
				</button>
			</div>
		</div>
	)
}

export default Popup
