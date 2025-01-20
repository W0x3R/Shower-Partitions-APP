import { NavLink } from "react-router-dom"
import { DropdownMenu } from "./DropdownMenu"
import isDesktop from "../../../../utils/isDesktop"
import isHoverSupported from "../../../../utils/isHoverSupported"

export const DropdownItem = ({
	styles,
	actions: { onBurgerClick, isMenuOpen, setIsMenuOpen },
	menuName,
	title,
	menuItems,
}) => {
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

	const handleToggleMenuClick = (e, menuName, isMenuOpen) => {
		if (e.target.closest(`.${styles["nav__link-wrapper"]}`)) {
			handleMenuActions(menuName, !isMenuOpen)
		}
	}

	const handleCloseMenuClick = (menuName) => {
		handleMenuActions(menuName, false)
	}

	const handleMenuToggleOnEnter = (e) => {
		if (e.key === "Enter") {
			handleToggleMenuClick(e, menuName, isMenuOpen[menuName])
		}
	}

	return (
		<li
			className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]} ${isMenuOpen[menuName] ? styles["nav__dropdown-item_open"] : ""}`}
			onMouseEnter={() => handleOpenMenuMouseEnter(menuName)}
			onMouseLeave={() => handleCloseMenuMouseLeave(menuName)}
			onKeyDown={(e) => {
				handleMenuToggleOnEnter(e)
			}}
			onMouseDown={(e) =>
				handleToggleMenuClick(e, menuName, isMenuOpen[menuName])
			}
			aria-expanded={isMenuOpen[menuName]}
			aria-haspopup="true"
			aria-controls={`menu-${menuName}`}
		>
			<div className={styles["nav__link-wrapper"]}>
				<span id={`menu-desc-${menuName}`} className="sr-only">
					Выпадающее меню с {menuItems.length} ссылками
				</span>
				<NavLink
					className={styles["nav__item-link"]}
					aria-describedby={`menu-desc-${menuName}`}
				>
					{title}
				</NavLink>
				<span
					className={`${styles["nav__item-arrow"]} ${isMenuOpen[menuName] ? styles["nav__item-arrow_open"] : ""}`}
					aria-hidden="true"
				>
					▼
				</span>
			</div>
			<DropdownMenu
				styles={styles}
				actions={{
					onBurgerClick,
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
