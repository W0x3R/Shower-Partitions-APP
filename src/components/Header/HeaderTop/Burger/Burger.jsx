import styles from "./Burger.module.scss"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const Burger = ({ isBurgerActive, onBurgerClick, burgerRef }) => {
	const location = useLocation()

	useEffect(() => {
		const header = document.querySelector(".header")

		if (
			location.pathname === "/delivery" ||
			location.pathname === "/price" ||
			location.pathname === "/contacts" ||
			(location.pathname === "/article" && !isBurgerActive)
		) {
			header.classList.add("black")
		} else {
			header.classList.remove("black")
		}
	}, [isBurgerActive, location])

	return (
		<button
			className={`${styles.burger} ${isBurgerActive ? styles.open : styles.close}`}
			onClick={onBurgerClick}
			ref={burgerRef}
			aria-label={
				isBurgerActive ?
					"Закрыть меню сайта, меню навигации сайта открыто."
				:	"Открыть меню сайта, меню навигации сайта закрыто."
			}
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

export default Burger
