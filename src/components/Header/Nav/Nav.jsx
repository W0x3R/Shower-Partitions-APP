import { NavLink } from "react-router-dom"
import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"

export const Nav = ({ onMenuClick, isMenuOpen, isBurgerActive }) => {
	const [isFixed, setIsFixed] = useState(false)
	const [focusedItem, setFocusedItem] = useState(null)
	const [lastFocusedItem, setLastFocusedItem] = useState(null)
	const navLinkRefs = useRef({})
	let animationFrameId = useRef(null)

	const handleScroll = () => {
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId)
		}
		animationFrameId = requestAnimationFrame(() => {
			setIsFixed(window.scrollY > 120)
		})
	}

	const handleKeyDown = (e) => {
		if (e.code === "Escape") {
			navLinkRefs.current[lastFocusedItem].focus()
		}
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
			onKeyDown={handleKeyDown}
		>
			<ul className={styles.nav__list}>
				<li className={styles.nav__item}>
					<NavLink
						className={styles["nav__item-link"]}
						onFocus={() => setFocusedItem("products")}
					>
						Товары
					</NavLink>
				</li>
				<li className={styles.nav__item}>
					<NavLink
						className={styles["nav__item-link"]}
						onFocus={() => setFocusedItem("portfolio")}
					>
						Портфолио
					</NavLink>
				</li>
				<li
					className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]}`}
					onClick={() => onMenuClick("customer")}
				>
					<div className={styles["nav__link-wrapper"]}>
						<NavLink
							ref={(el) => (navLinkRefs.current["customer"] = el)}
							className={styles["nav__item-link"]}
							onFocus={() => {
								setFocusedItem("customer")
								setLastFocusedItem("customer")
							}}
						>
							Покупателям
						</NavLink>
						<span
							className={`${styles["nav__item-arrow"]} ${isMenuOpen.customer || focusedItem === "delivery" || focusedItem === "cost" || focusedItem === "articles" ? styles["open"] : ""}`}
						>
							▼
						</span>
					</div>

					<ul
						className={`${styles.nav__menu} ${isMenuOpen.customer ? styles["open"] : ""} ${focusedItem === "delivery" || focusedItem === "cost" || focusedItem === "articles" ? styles.open : ""}`}
					>
						<li className={styles["nav__menu-item"]}>
							<NavLink
								className={styles["nav__menu-link"]}
								onFocus={() => setFocusedItem("delivery")}
							>
								Доставка и оплата
							</NavLink>
						</li>
						<li className={styles["nav__menu-item"]}>
							<NavLink
								className={styles["nav__menu-link"]}
								onFocus={() => setFocusedItem("cost")}
							>
								Стоимость
							</NavLink>
						</li>
						<li className={styles["nav__menu-item"]}>
							<NavLink
								className={styles["nav__menu-link"]}
								onFocus={() => setFocusedItem("articles")}
							>
								Полезные статьи и новости
							</NavLink>
						</li>
					</ul>
				</li>
				<li
					className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]}`}
					onClick={() => onMenuClick("company")}
				>
					<div className={styles["nav__link-wrapper"]}>
						<NavLink
							className={styles["nav__item-link"]}
							ref={(el) => (navLinkRefs.current["company"] = el)}
							onFocus={() => {
								setFocusedItem("company")
								setLastFocusedItem("company")
							}}
						>
							О компании
						</NavLink>
						<span
							className={`${styles["nav__item-arrow"]} ${isMenuOpen.company || focusedItem === "contacts" ? styles["open"] : ""}`}
						>
							▼
						</span>
					</div>

					<ul
						className={`${styles.nav__menu} ${isMenuOpen.company ? styles["open"] : ""} ${focusedItem === "contacts" ? styles.open : ""}`}
						onBlur={() => setFocusedItem(null)}
					>
						<li className={styles["nav__menu-item"]}>
							<NavLink
								className={`${styles["nav__menu-link"]} ${focusedItem === "contacts" ? styles.focused : ""}`}
								onFocus={() => setFocusedItem("contacts")}
							>
								Наши контакты
							</NavLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}
