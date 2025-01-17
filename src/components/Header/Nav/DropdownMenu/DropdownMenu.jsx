import { NavLink } from "react-router-dom"

export const DropdownMenu = ({
	styles,
	menuItems,
	isMenuOpen,
	onClose,
	menuValue,
	handleFocused,
	isFocused,
	onBurgerClick,
}) => (
	<ul
		className={`${styles.nav__menu} ${isMenuOpen || isFocused[[menuValue]] ? styles["nav__menu_open"] : ""}`}
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
						onBlur={(e) => {
							if (i === menuItems.length - 1) {
								e.target.blur()
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
