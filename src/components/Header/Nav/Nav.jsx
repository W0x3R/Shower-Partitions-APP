import { NavLink } from "react-router-dom"
import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"

export const Nav = ({ onMenuClick, isMenuOpen, isBurgerActive }) => {
	const [isFixed, setIsFixed] = useState(false)
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
					onClick={() => onMenuClick("customer")}
				>
					<div className={styles["nav__link-wrapper"]}>
						<NavLink className={styles["nav__item-link"]}>Покупателям</NavLink>
						<span
							className={`${styles["nav__item-arrow"]} ${isMenuOpen.customer ? styles["open"] : ""}`}
						>
							▼
						</span>
					</div>

					<ul
						className={`${styles.nav__menu} ${isMenuOpen.customer ? styles["open"] : ""}`}
					>
						<li className={styles["nav__menu-item"]}>
							<NavLink className={styles["nav__menu-link"]}>
								Доставка и оплата
							</NavLink>
						</li>
						<li className={styles["nav__menu-item"]}>
							<NavLink className={styles["nav__menu-link"]}>Стоимость</NavLink>
						</li>
						<li className={styles["nav__menu-item"]}>
							<NavLink className={styles["nav__menu-link"]}>
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
						<NavLink className={styles["nav__item-link"]}>О компании</NavLink>
						<span
							className={`${styles["nav__item-arrow"]} ${isMenuOpen.company ? styles["open"] : ""}`}
						>
							▼
						</span>
					</div>

					<ul
						className={`${styles.nav__menu} ${isMenuOpen.company ? styles["open"] : ""}`}
					>
						<li className={styles["nav__menu-item"]}>
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
