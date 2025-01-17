import { NavLink } from "react-router-dom"

export const DropdownMenu = ({
	styles,
	menuItems,
	isMenuOpen,
	onClose,
	menuValue,
}) => (
	<ul
		className={`${styles.nav__menu} ${isMenuOpen ? styles["nav__menu_open"] : ""}`}
	>
		{menuItems.map((item) => {
			return (
				<li
					key={item}
					className={styles["nav__menu-item"]}
					onClick={() => onClose(menuValue)}
				>
					<NavLink className={styles["nav__menu-link"]}>{item}</NavLink>
				</li>
			)
		})}
	</ul>
)
