import styles from "./Burger.module.scss"

export const Burger = ({ isBurgerActive, onBurgerClick }) => {
	const lines = Array(3).fill(null)

	return (
		<div className={styles.burger} onClick={onBurgerClick}>
			{lines.map((_, i) => {
				return (
					<span
						key={i}
						className={`${styles.burger__line} ${isBurgerActive ? styles.active : ""}`}
					></span>
				)
			})}
		</div>
	)
}
