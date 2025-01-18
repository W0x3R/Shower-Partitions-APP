import { NavLink } from "react-router-dom"

export const NavItems = ({ styles, titleItems, onBurgerClick }) => {
	return (
		<>
			{titleItems.map((navItem) => {
				return (
					<li className={styles.nav__item} key={navItem}>
						<NavLink
							className={styles["nav__item-link"]}
							onClick={onBurgerClick}
						>
							{navItem}
						</NavLink>
					</li>
				)
			})}
		</>
	)
}
