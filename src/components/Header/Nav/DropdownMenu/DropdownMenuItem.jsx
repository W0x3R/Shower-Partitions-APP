import { NavLink } from "react-router-dom"

export const DropdownMenuItem = ({
	styles,
	menuItems,
	isMenuOpen,
	onClose,
	valueOfCloseMenu,
}) => (
	<ul className={`${styles.nav__menu} ${isMenuOpen && styles.open}`}>
		{menuItems.map((item) => {
			return (
				<li
					key={item}
					className={styles["nav__menu-item"]}
					onClick={() => onClose(valueOfCloseMenu)}
				>
					<NavLink className={styles["nav__menu-link"]}>{item}</NavLink>
				</li>
			)
		})}
	</ul>
)
