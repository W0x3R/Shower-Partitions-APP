import { NavLink } from "react-router-dom"

const NavItems = ({ styles, onBurgerClick }) => {
	const setIsActive = ({ isActive }) =>
		`${styles["nav__item-link"]} ${isActive ? styles.active : ""}`

	return (
		<>
			<li className={styles.nav__item}>
				<NavLink end to="." className={setIsActive} onClick={onBurgerClick}>
					Главная
				</NavLink>
			</li>
			<li className={styles.nav__item}>
				<NavLink className={setIsActive} onClick={onBurgerClick} to="portfolio">
					Портфолио
				</NavLink>
			</li>
		</>
	)
}
export default NavItems
