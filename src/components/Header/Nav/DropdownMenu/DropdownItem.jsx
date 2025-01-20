import { NavLink } from "react-router-dom"
import { DropdownMenu } from "./DropdownMenu"
import isDesktop from "../../../../utils/isDesktop"
import isHoverSupported from "../../../../utils/isHoverSupported"

export const DropdownItem = ({
	styles,
	actions: {
		onBurgerClick,
		isFocused,
		setIsFocused,
		isMenuOpen,
		setIsMenuOpen,
	},
	menuName,
	title,
	menuItems,
}) => {
	const handleFocus = (menuName, value) => {
		setIsFocused((prev) => ({ ...prev, [menuName]: value }))
	}

	const handleMenuActions = (menuName, value) => {
		setIsMenuOpen((prev) => ({ ...prev, [menuName]: value }))
	}

	const handleOpenMenuMouseEnter = (menuName) => {
		if (isDesktop() && isHoverSupported()) {
			handleMenuActions(menuName, true)
		}
	}

	const handleCloseMenuMouseLeave = (menuName) => {
		if (isDesktop() && isHoverSupported()) {
			handleMenuActions(menuName, false)
		}
	}

	const handleToggleMenuClick = (menuName, isMenuOpen) => {
		if (!isDesktop() || (isDesktop() && !isHoverSupported())) {
			handleMenuActions(menuName, !isMenuOpen)
		}
	}

	const handleCloseMenuClick = (menuName) => {
		handleMenuActions(menuName, false)
	}

	return (
		<li
			className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]} ${isMenuOpen[menuName] || isFocused[menuName] ? styles["nav__dropdown-item_open"] : ""}`}
			onMouseEnter={() => handleOpenMenuMouseEnter(menuName)}
			onMouseLeave={() => handleCloseMenuMouseLeave(menuName)}
		>
			<div
				className={styles["nav__link-wrapper"]}
				onClick={() => {
					handleFocus(menuName, false)
					handleToggleMenuClick(menuName, isMenuOpen[menuName])
				}}
			>
				<NavLink className={styles["nav__item-link"]}>{title}</NavLink>
				<span
					className={`${styles["nav__item-arrow"]} ${isMenuOpen[menuName] || isFocused[menuName] ? styles["nav__item-arrow_open"] : ""}`}
				>
					▼
				</span>
			</div>
			<DropdownMenu
				styles={styles}
				actions={{
					onBurgerClick,
					isFocused,
					handleFocus,
					isMenuOpen,
					handleMenuActions,
					handleCloseMenuClick,
				}}
				menuName={menuName}
				menuItems={menuItems}
			/>
		</li>
	)
}
