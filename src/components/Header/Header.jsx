import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import HeaderTop from "./HeaderTop/HeaderTop"

const Header = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false)
	const [openMenu, setOpenMenu] = useState(null)

	const handleBurgerClick = () => {
		setIsBurgerActive((prev) => !prev)
	}

	const handleMenuToggle = (index) => {
		setOpenMenu((prev) => (prev === index ? null : index))
	}

	return (
		<header className={styles.header}>
			<div className="container">
				<HeaderTop
					onBurgerClick={handleBurgerClick}
					isBurgerActive={isBurgerActive}
				/>
				<nav className={styles.nav}>
					<ul className={styles.nav__list}>
						<li className={styles.nav__item}>
							<NavLink className={styles["nav__item-link"]}>Товары</NavLink>
						</li>
						<li className={styles.nav__item}>
							<NavLink className={styles["nav__item-link"]}>Портфолио</NavLink>
						</li>
						<li
							className={`${styles["nav__item"]} ${styles["nav__dropdown-item"]}`}
							onClick={() => handleMenuToggle(0)}
						>
							<div className={styles["nav__link-wrapper"]}>
								<NavLink className={styles["nav__item-link"]}>
									Покупателям
								</NavLink>
								<span
									className={`${styles["nav__item-arrow"]} ${openMenu === 0 ? styles["open"] : ""}`}
								>
									▼
								</span>
							</div>

							<ul
								className={`${styles.nav__menu} ${openMenu === 0 ? styles["open"] : ""}`}
							>
								<li className={styles["nav__menu-item"]}>
									<NavLink className={styles["nav__menu-link"]}>
										Доставка и оплата
									</NavLink>
								</li>
								<li className={styles["nav__menu-item"]}>
									<NavLink className={styles["nav__menu-link"]}>
										Стоимость
									</NavLink>
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
							onClick={() => handleMenuToggle(1)}
						>
							<div className={styles["nav__link-wrapper"]}>
								<NavLink className={styles["nav__item-link"]}>
									О компании
								</NavLink>
								<span
									className={`${styles["nav__item-arrow"]} ${openMenu === 1 ? styles["open"] : ""}`}
								>
									▼
								</span>
							</div>

							<ul
								className={`${styles.nav__menu} ${openMenu === 1 ? styles["open"] : ""}`}
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
			</div>
		</header>
	)
}

export default Header
