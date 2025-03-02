import { NavLink } from "react-router-dom"

const NavItems = ({ styles, onBurgerClick }) => {
	return (
		<>
			<li className={styles.nav__item}>
				<NavLink
					end
					to="."
					className={styles["nav__item-link"]}
					onClick={onBurgerClick}
				>
					Главная
				</NavLink>
			</li>
			<li className={styles.nav__item}>
				<NavLink
					className={styles["nav__item-link"]}
					onClick={onBurgerClick}
					to="portfolio"
				>
					Портфолио
				</NavLink>
			</li>
		</>
	)
}
export default NavItems
