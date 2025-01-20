import { NavLink } from "react-router-dom"

export const DropdownMenu = ({
	styles,
	actions: {
		onBurgerClick,
		isFocused,
		handleFocus,
		isMenuOpen,
		handleMenuActions,
		handleCloseMenuClick,
	},
	menuItems,
	menuName,
}) => {
	return (
		<ul
			className={`${styles.nav__menu} ${isMenuOpen[menuName] || isFocused[menuName] ? styles["nav__menu_open"] : ""}`}
			id={`menu-${menuName}`}
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
