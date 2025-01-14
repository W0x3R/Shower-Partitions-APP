import styles from "./Burger.module.scss"

export const Burger = ({ isBurgerActive, onBurgerClick }) => {
	return (
		<button
			className={styles.burger}
			onClick={onBurgerClick}
			aria-label="Открыть меню сайта"
			aria-expanded={isBurgerActive}
		>
			{[...Array(3)].map((_, i) => {
				return (
					<span
						key={i}
						className={`${styles.burger__line} ${isBurgerActive ? styles.active : ""}`}
					></span>
				)
			})}
		</button>
	)
}
