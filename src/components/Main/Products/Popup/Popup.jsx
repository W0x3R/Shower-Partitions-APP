import styles from "./Popup.module.scss"

export const Popup = ({
	activePopupImage,
	activePopupText,
	handlePopupClose,
	isPopupOpen,
}) => {
	return (
		<div
			className={`${styles.products__popup} ${isPopupOpen ? styles.visible : ""}`}
			onClick={handlePopupClose}
		>
			<div
				className={styles["products__popup-content"]}
				onClick={(e) => e.stopPropagation()}
			>
				<p className={styles.popup__text}>{activePopupText}</p>
				<img
					className={styles.popup__img}
					src={activePopupImage}
					onClick={(e) => e.currentTarget}
				/>
				<button
					className={styles["products__popup-btn"]}
					onClick={handlePopupClose}
				>
					<span>X</span>
				</button>
			</div>
		</div>
	)
}
