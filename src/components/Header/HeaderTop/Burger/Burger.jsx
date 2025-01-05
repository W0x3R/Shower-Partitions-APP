import styles from "./Burger.module.scss"

export const Burger = ({ isBurgerActive, onBurgerClick }) => {
	return (
		<div className={styles.burger} onClick={onBurgerClick}>
			<span
				className={`${styles.burger__line} ${isBurgerActive ? styles.active : ""}`}
			></span>
			<span
				className={`${styles.burger__line} ${isBurgerActive ? styles.active : ""}`}
			></span>
			<span
				className={`${styles.burger__line} ${isBurgerActive ? styles.active : ""}`}
			></span>
		</div>
	)
}
