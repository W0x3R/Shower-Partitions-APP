import { NavLink } from "react-router-dom"
import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"
import { DropdownItem } from "./DropdownMenu/DropdownItem"

export const Nav = ({ isBurgerActive }) => {
	const [isFixed, setIsFixed] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState({
		customer: false,
		company: false,
	})
	const animationFrameId = useRef(null)

	const actionsOnMenuInteractions = (menuName, setIsMenuOpenValue) => {
		setIsMenuOpen((prev) => ({ ...prev, [menuName]: setIsMenuOpenValue }))
	}

	const isDesktop = () => window.innerWidth > 768
	const isHoverSupported = () => window.matchMedia("(hover: hover)").matches

	const handleOpenMenuMouseEnter = (menuName) => {
		if (isDesktop() && isHoverSupported()) {
			actionsOnMenuInteractions(menuName, true)
		}
	}

	const handleCloseMenuMouseLeave = (menuName) => {
		if (isDesktop() && isHoverSupported()) {
			actionsOnMenuInteractions(menuName, false)
		}
	}

	const handleToggleMenuClick = (menuName, isMenuOpen) => {
		if (!isDesktop() || (isDesktop() && !isHoverSupported())) {
			actionsOnMenuInteractions(menuName, !isMenuOpen)
		}
	}

	const handleCloseMenuClick = (menuName) => {
		actionsOnMenuInteractions(menuName, false)
	}

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
				<li className={styles.nav__item}>
					<NavLink className={styles["nav__item-link"]}>Товары</NavLink>
				</li>
				<li className={styles.nav__item}>
					<NavLink className={styles["nav__item-link"]}>Портфолио</NavLink>
				</li>
				<DropdownItem
					styles={styles}
					isMenuOpen={isMenuOpen.customer}
					actions={{
						onMouseEnter: handleOpenMenuMouseEnter,
						onMouseLeave: handleCloseMenuMouseLeave,
						onToggle: handleToggleMenuClick,
						onClose: handleCloseMenuClick,
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
					}}
					menuValue={"company"}
					title="О компании"
					menuItems={["Наши контакты"]}
				/>
			</ul>
		</nav>
	)
}
