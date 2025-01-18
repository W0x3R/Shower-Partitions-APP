import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"
import { DropdownItem } from "./DropdownMenu/DropdownItem"
import { NavItems } from "./NavItems"
import isMobile from "../../../utils/isMobile"
import ReactFocusLock from "react-focus-lock"

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

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current)
			}
		}
	}, [])

	const NavContent = (
		<nav
			className={`${styles.nav} ${isBurgerActive ? styles["nav_open"] : ""} ${isFixed ? styles["nav_fixed"] : ""}`}
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

	return isMobile() && isBurgerActive ?
			<ReactFocusLock>{NavContent}</ReactFocusLock>
		:	NavContent
}
