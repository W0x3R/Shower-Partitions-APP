import styles from "./Burger.module.scss"

export const Burger = ({ isBurgerActive, onBurgerClick, burgerRef }) => {
	return (
		<button
			className={`${styles.burger} ${isBurgerActive ? styles.open : styles.close}`}
			onClick={onBurgerClick}
			ref={burgerRef}
			aria-label={isBurgerActive ? "Закрыть меню сайта" : "Открыть меню сайта"}
			aria-expanded={isBurgerActive}
			aria-controls="burger-open-nav"
		>
			<span
				className={`${styles.burger__line} ${styles["first-line"]}`}
				aria-hidden="true"
			></span>
			<span
				className={`${styles.burger__line} ${styles["second-line"]}`}
				aria-hidden="true"
			></span>
			<span
				className={`${styles.burger__line} ${styles["third-line"]}`}
				aria-hidden="true"
			></span>
		</button>
	)
}
