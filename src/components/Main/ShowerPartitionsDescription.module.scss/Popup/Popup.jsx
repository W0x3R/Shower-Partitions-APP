import styles from "./Popup.module.scss"

export const Popup = ({ isPopupOpen, handlePopupClose, activePopupImg }) => {
	return (
		<div
			className={`${styles.popup} ${isPopupOpen ? styles.visible : ""}`}
			onClick={handlePopupClose}
		>
			<div className={styles.popup__content}>
				<img
					className={styles.popup__img}
					src={activePopupImg}
					onClick={(e) => e.stopPropagation()}
				></img>
				<button className={styles.popup__btn} onClick={handlePopupClose}>
					<span>X</span>
				</button>
			</div>
		</div>
	)
}
