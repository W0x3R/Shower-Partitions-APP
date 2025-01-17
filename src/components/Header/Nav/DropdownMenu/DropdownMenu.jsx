import { NavLink } from "react-router-dom"
import { DropdownMenuItem } from "./DropdownMenuItem"

export const DropdownMenu = ({
	styles,
	isMenuOpen,
	actions: { onMouseEnter, onMouseLeave, onToggle, onClose },
	valueOfCloseMenu,
	title,
	menuItems,
}) => {
	return (
		<li
			className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]} ${isMenuOpen && styles.open}`}
			onMouseEnter={() => onMouseEnter(valueOfCloseMenu)}
			onMouseLeave={() => onMouseLeave(valueOfCloseMenu)}
		>
			<div
				className={styles["nav__link-wrapper"]}
				onClick={() => onToggle(valueOfCloseMenu, isMenuOpen)}
			>
				<NavLink className={styles["nav__item-link"]}>{title}</NavLink>
				<span
					className={`${styles["nav__item-arrow"]} ${isMenuOpen && styles.open}`}
				>
					▼
				</span>
			</div>
			<DropdownMenuItem
				styles={styles}
				menuItems={menuItems}
				isMenuOpen={isMenuOpen}
				onClose={onClose}
				valueOfCloseMenu={valueOfCloseMenu}
			/>
		</li>
	)
}
