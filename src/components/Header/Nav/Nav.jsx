import { NavLink } from "react-router-dom"
import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"

export const Nav = ({ isBurgerActive }) => {
	const [isFixed, setIsFixed] = useState(false)
	const navMenus = useRef({})
	const navDropdownMenusRef = useRef({})
	const navDropdownMenusArrows = useRef({})
	const [isMenuOpen, setIsMenuOpen] = useState({
		customer: false,
		company: false,
	})

	const handleOpenMenuMouseEnter = (menuName) => {
		const mediaQuery = window.matchMedia("(hover: hover)")
		if (window.innerWidth > 768 && mediaQuery.matches) {
			navMenus.current[menuName].classList.add(styles.open)
		}
	}

	const handleCloseMenuMouseLeave = (menuName) => {
		const mediaQuery = window.matchMedia("(hover: hover)")
		if (window.innerWidth > 768 && mediaQuery.matches) {
			navMenus.current[menuName].classList.remove(styles.open)
		}
	}

	const handleToggleMenuMouseClick = (menuName) => {
		const mediaQuery = window.matchMedia("(hover: none)")
		if (
			window.innerWidth <= 768 ||
			(window.innerWidth > 768) & mediaQuery.matches
		) {
			navDropdownMenusRef.current[menuName].classList.toggle(styles.open)
			navMenus.current[menuName].classList.toggle(styles.open)
			navDropdownMenusArrows.current[menuName].classList.toggle(styles.open)
		}
	}

	const handleCloseMenuMouseClick = (menuName) => {
		navMenus.current[menuName].classList.remove(styles.open)
		navDropdownMenusRef.current[menuName].classList.remove(styles.open)
		navDropdownMenusArrows.current[menuName].classList.remove(styles.open)
	}

	let animationFrameId = useRef(null)

	const handleScroll = () => {
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId)
		}
		animationFrameId = requestAnimationFrame(() => {
			setIsFixed(window.scrollY > 120)
		})
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId)
			}
		}
	}, [])

	return (
		<nav
			className={`${styles.nav} ${isBurgerActive ? styles.open : ""} ${isFixed ? styles.fixed : ""}`}
		>
			<ul className={styles.nav__list}>
				<li className={styles.nav__item}>
					<NavLink className={styles["nav__item-link"]}>Товары</NavLink>
				</li>
				<li className={styles.nav__item}>
					<NavLink className={styles["nav__item-link"]}>Портфолио</NavLink>
				</li>
				<li
					className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]}`}
					ref={(el) => (navDropdownMenusRef.current["customer"] = el)}
					onMouseEnter={() => handleOpenMenuMouseEnter("customer")}
					onMouseLeave={() => handleCloseMenuMouseLeave("customer")}
				>
					<div
						className={styles["nav__link-wrapper"]}
						onClick={() => handleToggleMenuMouseClick("customer")}
					>
						<NavLink className={styles["nav__item-link"]}>Покупателям</NavLink>
						<span
							className={styles["nav__item-arrow"]}
							ref={(el) => (navDropdownMenusArrows.current["customer"] = el)}
						>
							▼
						</span>
					</div>
					<ul
						className={styles.nav__menu}
						ref={(el) => (navMenus.current["customer"] = el)}
					>
						<li
							className={styles["nav__menu-item"]}
							onClick={() => handleCloseMenuMouseClick("customer")}
						>
							<NavLink className={styles["nav__menu-link"]}>
								Доставка и оплата
							</NavLink>
						</li>
						<li
							className={styles["nav__menu-item"]}
							onClick={() => handleCloseMenuMouseClick("customer")}
						>
							<NavLink className={styles["nav__menu-link"]}>Стоимость</NavLink>
						</li>
						<li
							className={styles["nav__menu-item"]}
							onClick={() => handleCloseMenuMouseClick("customer")}
						>
							<NavLink className={styles["nav__menu-link"]}>
								Полезные статьи и новости
							</NavLink>
						</li>
					</ul>
				</li>
				<li
					className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]}`}
					ref={(el) => (navDropdownMenusRef.current["company"] = el)}
					onMouseEnter={() => handleOpenMenuMouseEnter("company")}
					onMouseLeave={() => handleCloseMenuMouseLeave("company")}
				>
					<div
						className={styles["nav__link-wrapper"]}
						onClick={() => handleToggleMenuMouseClick("company")}
					>
						<NavLink className={styles["nav__item-link"]}>О компании</NavLink>
						<span
							className={styles["nav__item-arrow"]}
							ref={(el) => (navDropdownMenusArrows.current["company"] = el)}
						>
							▼
						</span>
					</div>

					<ul
						className={styles.nav__menu}
						ref={(el) => (navMenus.current["company"] = el)}
					>
						<li
							className={styles["nav__menu-item"]}
							onClick={() => handleCloseMenuMouseClick("company")}
						>
							<NavLink className={styles["nav__menu-link"]}>
								Наши контакты
							</NavLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}
