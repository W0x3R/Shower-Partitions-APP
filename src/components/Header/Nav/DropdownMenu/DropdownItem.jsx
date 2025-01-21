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
	const handleMenuActions = (value) =>
		setIsMenuOpen((prev) => ({ ...prev, [menuName]: value }))

	const handleActionsMenuMouseMove = (value) => {
		if (isDesktop() && isHoverSupported()) {
			handleMenuActions(value)
		}
	}

	const handleToggleMenuClick = (e) => {
		if (e.target.closest(`.${styles["nav__link-wrapper"]}`)) {
			setTimeout(() => {
				handleMenuActions(!isMenuOpen[menuName])
			}, 0)
		}
	}

	const handleCloseMenuClick = () => handleMenuActions(false)

	return (
		<li
			className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]} ${isMenuOpen[menuName] ? styles["nav__dropdown-item_open"] : ""}`}
			onMouseEnter={() => handleActionsMenuMouseMove(true)}
			onMouseLeave={() => handleActionsMenuMouseMove(false)}
			onMouseDown={(e) => handleToggleMenuClick(e)}
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
					onFocus={() => handleCloseMenuClick()}
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
