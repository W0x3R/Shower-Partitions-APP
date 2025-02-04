import styles from "./Popup.module.scss"
import BlackCross from "../../../../assets/main/black-cross.svg?react"

export const Popup = ({
	isPopupOpen,
	handlePopupCloseOnClick,
	activePopupImg,
	handlePopupCloseOnEsc,
}) => {
	return (
		<div
			className={`${styles.popup} ${isPopupOpen ? styles.visible : styles.hide}`}
			onClick={handlePopupCloseOnClick}
			onKeyDown={(e) => handlePopupCloseOnEsc(e)}
		>
			<div className={styles.popup__content}>
				<img
					className={styles.popup__img}
					src={activePopupImg}
					onClick={(e) => e.stopPropagation()}
				></img>
				<button className={styles.popup__btn} onClick={handlePopupCloseOnClick}>
					<BlackCross />
				</button>
			</div>
		</div>
	)
}
