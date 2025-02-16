import { useRef } from "react"
import { NavLink } from "react-router-dom"

export const DropdownMenu = ({
	styles,
	actions: {
		onBurgerClick,
		isMenuOpen,
		handleMenuActions,
		handleCloseMenuClick,
	},
	menuItems,
	menuName,
	links,
}) => {
	const navMenuRef = useRef()
	return (
		<ul
			className={`${styles.nav__menu} ${isMenuOpen[menuName] ? styles["nav__menu_open"] : ""}`}
			id={`menu-${menuName}`}
			ref={navMenuRef}
		>
			{menuItems.map((item, i) => {
				return (
					<li key={item} className={styles["nav__menu-item"]}>
						<NavLink
							className={styles["nav__menu-link"]}
							onFocus={() => handleMenuActions(true)}
							onClick={(e) => {
								handleCloseMenuClick()
								onBurgerClick()
								e.target.blur()
							}}
							onBlur={() => {
								if (i === menuItems.length - 1) {
									navMenuRef.current.classList.remove(styles["nav__menu_open"])
									handleCloseMenuClick()
								}
							}}
							to={links[i]}
						>
							{item}
						</NavLink>
					</li>
				)
			})}
		</ul>
	)
}
