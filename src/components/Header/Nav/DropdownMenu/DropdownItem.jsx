import { NavLink } from "react-router-dom"
import { DropdownMenu } from "./DropdownMenu"

export const DropdownItem = ({
	styles,
	isMenuOpen,
	actions: { onMouseEnter, onMouseLeave, onToggle, onClose },
	menuValue,
	title,
	menuItems,
}) => {
	return (
		<li
			className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]} ${isMenuOpen ? styles["nav__dropdown-item_open"] : ""}`}
			onMouseEnter={() => onMouseEnter(menuValue)}
			onMouseLeave={() => onMouseLeave(menuValue)}
		>
			<div
				className={styles["nav__link-wrapper"]}
				onClick={() => onToggle(menuValue, isMenuOpen)}
			>
				<NavLink className={styles["nav__item-link"]}>{title}</NavLink>
				<span
					className={`${styles["nav__item-arrow"]} ${isMenuOpen ? styles["nav__item-arrow_open"] : ""}`}
				>
					▼
				</span>
			</div>
			<DropdownMenu
				styles={styles}
				menuItems={menuItems}
				isMenuOpen={isMenuOpen}
				onClose={onClose}
				menuValue={menuValue}
			/>
		</li>
	)
}
