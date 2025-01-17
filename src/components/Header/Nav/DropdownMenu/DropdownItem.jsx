import { NavLink } from "react-router-dom"
import { DropdownMenu } from "./DropdownMenu"
import { useState } from "react"

export const DropdownItem = ({
	styles,
	isMenuOpen,
	actions: { onMouseEnter, onMouseLeave, onToggle, onClose, onBurgerClick },
	menuValue,
	title,
	menuItems,
}) => {
	const [isFocused, setIsFocused] = useState({
		customer: false,
		company: false,
	})

	const handleFocused = (value) => {
		setIsFocused((prev) => ({ ...prev, [menuValue]: value }))
	}

	return (
		<li
			className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]} ${isMenuOpen || isFocused[menuValue] ? styles["nav__dropdown-item_open"] : ""}`}
			onMouseEnter={() => onMouseEnter(menuValue)}
			onMouseLeave={() => onMouseLeave(menuValue)}
		>
			<div
				className={styles["nav__link-wrapper"]}
				onClick={() => onToggle(menuValue, isMenuOpen)}
			>
				<NavLink className={styles["nav__item-link"]}>{title}</NavLink>
				<span
					className={`${styles["nav__item-arrow"]} ${isMenuOpen || isFocused[menuValue] ? styles["nav__item-arrow_open"] : ""}`}
				>
					▼
				</span>
			</div>
			<DropdownMenu
				styles={styles}
				menuItems={menuItems}
				isMenuOpen={isMenuOpen}
				onClose={onClose}
				onBurgerClick={onBurgerClick}
				menuValue={menuValue}
				handleFocused={handleFocused}
				isFocused={isFocused}
			/>
		</li>
	)
}
