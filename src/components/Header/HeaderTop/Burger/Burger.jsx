import styles from "./Burger.module.scss"

export const Burger = ({ isBurgerActive, onBurgerClick }) => {
	return (
		<button
			className={styles.burger}
			onClick={onBurgerClick}
			aria-label={isBurgerActive ? "Закрыть меню сайта" : "Открыть меню сайта"}
			aria-expanded={isBurgerActive}
			aria-controls="burger-open-nav"
		>
			{[...Array(3)].map((_, i) => {
				return (
					<span
						key={i}
						className={`${styles.burger__line} ${isBurgerActive ? styles.active : ""}`}
						aria-hidden="true"
					></span>
				)
			})}
		</button>
	)
}
