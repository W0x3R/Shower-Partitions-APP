import { NavLink } from "react-router-dom"
import { DropdownMenu } from "./DropdownMenu"
import { useState } from "react"
import { useMenuActions } from "./UseMenuActions"

export const DropdownItem = ({
	styles,
	onBurgerClick,
	menuValue,
	title,
	menuItems,
}) => {
	const {
		isMenuOpen,
		handleOpenMenuMouseEnter,
		handleCloseMenuMouseLeave,
		handleToggleMenuClick,
		handleCloseMenuClick,
	} = useMenuActions()

	const [isFocused, setIsFocused] = useState({
		customer: false,
		company: false,
	})

	return (
		<li
			className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]} ${isMenuOpen[menuValue] || isFocused[menuValue] ? styles["nav__dropdown-item_open"] : ""}`}
			onMouseEnter={() => handleOpenMenuMouseEnter(menuValue)}
			onMouseLeave={() => handleCloseMenuMouseLeave(menuValue)}
		>
			<div
				className={styles["nav__link-wrapper"]}
				onClick={() => handleToggleMenuClick(menuValue, isMenuOpen[menuValue])}
			>
				<NavLink className={styles["nav__item-link"]}>{title}</NavLink>
				<span
					className={`${styles["nav__item-arrow"]} ${isMenuOpen[menuValue] || isFocused[menuValue] ? styles["nav__item-arrow_open"] : ""}`}
				>
					▼
				</span>
			</div>
			<DropdownMenu
				styles={styles}
				menuItems={menuItems}
				isMenuOpen={isMenuOpen}
				onClose={handleCloseMenuClick}
				onBurgerClick={onBurgerClick}
				menuValue={menuValue}
				setIsFocused={setIsFocused}
				isFocused={isFocused}
			/>
		</li>
	)
}
