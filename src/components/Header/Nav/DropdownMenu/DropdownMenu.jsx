import { NavLink } from "react-router-dom"

export const DropdownMenu = ({
	styles,
	menuItems,
	isMenuOpen,
	onClose,
	menuValue,
	setIsFocused,
	isFocused,
	onBurgerClick,
}) => {
	const handleFocused = (value) => {
		setIsFocused((prev) => ({ ...prev, [menuValue]: value }))
	}

	return (
		<ul
			className={`${styles.nav__menu} ${isMenuOpen[menuValue] || isFocused[menuValue] ? styles["nav__menu_open"] : ""}`}
		>
			{menuItems.map((item, i) => {
				return (
					<li
						key={item}
						className={styles["nav__menu-item"]}
						onClick={() => {
							onClose(menuValue)
							handleFocused(false)
							onBurgerClick()
						}}
					>
						<NavLink
							className={styles["nav__menu-link"]}
							onFocus={() => handleFocused(true)}
							onBlur={() => {
								if (i === menuItems.length - 1) {
									handleFocused(false)
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
