import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"
import { DropdownItem } from "./DropdownMenu/DropdownItem"
import { NavItems } from "./NavItems"
import isMobile from "../../../utils/isMobile"

export const Nav = ({ isBurgerActive, onBurgerClick }) => {
	const [isFixed, setIsFixed] = useState(false)

	const [isFocused, setIsFocused] = useState({
		customer: false,
		company: false,
	})

	const [isMenuOpen, setIsMenuOpen] = useState({
		customer: false,
		company: false,
	})

	const animationFrameId = useRef(null)

	const handleScroll = () => {
		if (animationFrameId.current) {
			cancelAnimationFrame(animationFrameId.current)
		}

		animationFrameId.current = requestAnimationFrame(() => {
			setIsFixed((prev) => {
				const shouldFix = window.scrollY > 120
				return prev !== shouldFix ? shouldFix : prev
			})
		})
	}

	const handleCloseNavOnEsc = (e) => {
		if (isMobile() && e.code === "Escape") {
			onBurgerClick()
		}
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
			onKeyDown={(e) => handleCloseNavOnEsc(e)}
			aria-label="Основная навигация"
		>
			<ul className={styles.nav__list}>
				<NavItems
					styles={styles}
					titleItems={["Главная", "Портфолио"]}
					onBurgerClick={onBurgerClick}
				/>

				<DropdownItem
					styles={styles}
					actions={{
						onBurgerClick,
						isFocused,
						setIsFocused,
						isMenuOpen,
						setIsMenuOpen,
					}}
					menuName={"customer"}
					title="Покупателям"
					menuItems={[
						"Доставка и оплата",
						"Стоимость",
						"Полезные статьи и новости",
					]}
				/>

				<DropdownItem
					styles={styles}
					actions={{
						onBurgerClick,
						isFocused,
						setIsFocused,
						isMenuOpen,
						setIsMenuOpen,
					}}
					menuName={"company"}
					title="О компании"
					menuItems={["Наши контакты"]}
				/>
			</ul>
		</nav>
	)
}
