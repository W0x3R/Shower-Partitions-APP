import { NavLink } from "react-router-dom"

export const NavItems = ({ styles, titleItems }) => {
	return (
		<>
			{titleItems.map((navItem) => {
				return (
					<li className={styles.nav__item} key={navItem}>
						<NavLink className={styles["nav__item-link"]}>{navItem}</NavLink>
					</li>
				)
			})}
		</>
	)
}
