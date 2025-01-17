import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"
import { DropdownItem } from "./DropdownMenu/DropdownItem"
import { NavItems } from "./NavItems"
import { useMenuActions } from "./UseMenuActions"

export const Nav = ({ isBurgerActive, onBurgerClick }) => {
	const {
		isMenuOpen,
		handleOpenMenuMouseEnter,
		handleCloseMenuMouseLeave,
		handleToggleMenuClick,
		handleCloseMenuClick,
	} = useMenuActions()

	const [isFixed, setIsFixed] = useState(false)

	const animationFrameId = useRef(null)

	const handleScroll = () => {
		if (animationFrameId.current) {
			cancelAnimationFrame(animationFrameId.current)
		}

		animationFrameId.current = requestAnimationFrame(() => {
			setIsFixed(window.scrollY > 120)
		})
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current)
			}
		}
	}, [])

	return (
		<nav
			className={`${styles.nav} ${isBurgerActive ? styles["nav_open"] : ""} ${isFixed ? styles["nav_fixed"] : ""}`}
		>
			<ul className={styles.nav__list}>
				<NavItems styles={styles} titleItems={["Товары", "Портфолио"]} />
				<DropdownItem
					styles={styles}
					isMenuOpen={isMenuOpen.customer}
					actions={{
						onMouseEnter: handleOpenMenuMouseEnter,
						onMouseLeave: handleCloseMenuMouseLeave,
						onToggle: handleToggleMenuClick,
						onClose: handleCloseMenuClick,
						onBurgerClick: onBurgerClick,
					}}
					menuValue={"customer"}
					title="Покупателям"
					menuItems={[
						"Доставка и оплата",
						"Стоимость",
						"Полезные статьи и новости",
					]}
				/>
				<DropdownItem
					styles={styles}
					isMenuOpen={isMenuOpen.company}
					actions={{
						onMouseEnter: handleOpenMenuMouseEnter,
						onMouseLeave: handleCloseMenuMouseLeave,
						onToggle: handleToggleMenuClick,
						onClose: handleCloseMenuClick,
						onBurgerClick: onBurgerClick,
					}}
					menuValue={"company"}
					title="О компании"
					menuItems={["Наши контакты"]}
				/>
			</ul>
		</nav>
	)
}
