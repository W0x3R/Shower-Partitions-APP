import { NavLink } from "react-router-dom"
import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"
import {
	handleCloseMenuMouseClick,
	handleCloseMenuMouseLeave,
	handleOpenMenuMouseEnter,
	handleToggleMenuMouseClick,
} from "./navHandlers"

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
					className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]} ${isMenuOpen.customer && styles.open}`}
					onMouseEnter={() =>
						handleOpenMenuMouseEnter(actionsOnMenuInteractions, "customer")
					}
					onMouseLeave={() =>
						handleCloseMenuMouseLeave(actionsOnMenuInteractions, "customer")
					}
				>
					<div
						className={styles["nav__link-wrapper"]}
						onClick={() =>
							handleToggleMenuMouseClick(
								actionsOnMenuInteractions,
								"customer",
								isMenuOpen
							)
						}
					>
						<NavLink className={styles["nav__item-link"]}>Покупателям</NavLink>
						<span
							className={`${styles["nav__item-arrow"]} ${isMenuOpen.customer && styles.open}`}
						>
							▼
						</span>
					</div>
					<ul
						className={`${styles.nav__menu} ${isMenuOpen.customer && styles.open}`}
					>
						<li
							className={styles["nav__menu-item"]}
							onClick={() =>
								handleCloseMenuMouseClick(actionsOnMenuInteractions, "customer")
							}
						>
							<NavLink className={styles["nav__menu-link"]}>
								Доставка и оплата
							</NavLink>
						</li>
						<li
							className={styles["nav__menu-item"]}
							onClick={() =>
								handleCloseMenuMouseClick(actionsOnMenuInteractions, "customer")
							}
						>
							<NavLink className={styles["nav__menu-link"]}>Стоимость</NavLink>
						</li>
						<li
							className={styles["nav__menu-item"]}
							onClick={() =>
								handleCloseMenuMouseClick(actionsOnMenuInteractions, "customer")
							}
						>
							<NavLink className={styles["nav__menu-link"]}>
								Полезные статьи и новости
							</NavLink>
						</li>
					</ul>
				</li>
				<li
					className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]} ${isMenuOpen.company && styles.open}`}
					onMouseEnter={() =>
						handleOpenMenuMouseEnter(actionsOnMenuInteractions, "company")
					}
					onMouseLeave={() =>
						handleCloseMenuMouseLeave(actionsOnMenuInteractions, "company")
					}
				>
					<div
						className={styles["nav__link-wrapper"]}
						onClick={() =>
							handleToggleMenuMouseClick(
								actionsOnMenuInteractions,
								"company",
								isMenuOpen
							)
						}
					>
						<NavLink className={styles["nav__item-link"]}>О компании</NavLink>
						<span
							className={`${styles["nav__item-arrow"]} ${isMenuOpen.company && styles.open}`}
						>
							▼
						</span>
					</div>

					<ul
						className={`${styles.nav__menu} ${isMenuOpen.company && styles.open}`}
					>
						<li
							className={styles["nav__menu-item"]}
							onClick={() =>
								handleCloseMenuMouseClick(actionsOnMenuInteractions, "company")
							}
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
