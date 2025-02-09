import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"
import { DropdownItem } from "./DropdownMenu/DropdownItem"
import { NavItems } from "./NavItems"

export const Nav = ({ isBurgerActive, onBurgerClick }) => {
	const [isFixed, setIsFixed] = useState(false)

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

	return (
		<nav
			className={`${styles.nav} ${isBurgerActive ? styles["nav_open"] : styles["nav_hide"]} ${isFixed ? styles["nav_fixed"] : ""}`}
			aria-label="Основная навигация"
			id="burger-open-nav"
		>
			<ul className={styles.nav__list}>
				<NavItems styles={styles} onBurgerClick={onBurgerClick} />
				<DropdownItem
					styles={styles}
					actions={{
						onBurgerClick,
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
					links={["delivery", "price", "blog"]}
				/>

				<DropdownItem
					styles={styles}
					actions={{
						onBurgerClick,
						isMenuOpen,
						setIsMenuOpen,
					}}
					menuName={"company"}
					title="О компании"
					menuItems={["Наши контакты"]}
					links={["contacts"]}
				/>
			</ul>
		</nav>
	)
}
