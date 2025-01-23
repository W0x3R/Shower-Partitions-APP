import styles from "./Popup.module.scss"

export const Popup = ({
	activePopupImage,
	activePopupText,
	handlePopupClose,
	isPopupOpen,
	activePopupImageAlt,
	closePopupBtnRef,
	handleKeyDown,
}) => {
	return (
		<div
			className={`${styles.products__popup} ${isPopupOpen ? styles.visible : ""}`}
			onClick={handlePopupClose}
			role="dialog"
			aria-labelledby="popup-title"
			onKeyDown={handleKeyDown}
		>
			<div
				className={styles["products__popup-content"]}
				onClick={(e) => e.stopPropagation()}
			>
				<p className={styles.popup__text} id="popup-title">
					{activePopupText}
				</p>
				<img
					className={styles.popup__img}
					src={activePopupImage}
					onClick={(e) => e.currentTarget}
					alt={activePopupImageAlt}
				/>
				<button
					className={styles["products__popup-btn"]}
					onClick={handlePopupClose}
				></button>
			</div>
		</div>
	)
}
