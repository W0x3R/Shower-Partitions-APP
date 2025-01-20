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
					<li
						key={item}
						className={styles["nav__menu-item"]}
						onClick={() => {
							handleCloseMenuClick(menuName)
							handleFocus(menuName, false)
							onBurgerClick()
							handleMenuActions(menuName, false)
						}}
					>
						<NavLink
							className={styles["nav__menu-link"]}
							onFocus={() => handleMenuActions(menuName, true)}
							onBlur={() => {
								if (i === menuItems.length - 1) {
									handleFocus(menuName, false)
									handleMenuActions(menuName, false)
								}
							}}
						>
							{item}
						</NavLink>
					</li>
				)
			})}
		</ul>
	)
}
