import logo from "../../assets/header/logo.jpg"
import Location from "../../assets/header/location.svg?react"
import Whatsapp from "../../assets/header/whatsapp.svg?react"
import Viber from "../../assets/header/viber.svg?react"
import Telegram from "../../assets/header/telegram.svg?react"
import Instagram from "../../assets/header/instagram.svg?react"
import styles from "./Header.module.scss"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

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
				<div className={styles.header__top}>
					<div className={styles.header__logo}>
						<Link className={styles["header__logo-link"]} to=".">
							<img src={logo} className={styles["header__logo-img"]} />
						</Link>
					</div>
					<div className={`${styles.header__text} ${styles.header__texts}`}>
						<strong>Производство перегородок в Гомеле</strong>
					</div>
					<div className={styles.header__adress}>
						<Location className={styles["header__adress-img"]} />
						<p
							className={`${styles["header__adress-text"]} ${styles.header__texts}`}
						>
							<b>
								Наш адрес: <br></br> Беларусь,г.Гомель, ул. Гомельская 25
							</b>
						</p>
					</div>
					<div className={styles.header__socials}>
						<p
							className={`${styles["header__texts"]} ${styles["header__socials-text"]}`}
						>
							<b>Задайте вопрос, мы онлайн:</b>
						</p>
						<article className={styles["header__socials-links"]}>
							<a
								className={styles["header__social-link"]}
								href="#"
								target="_blank"
							>
								<Whatsapp />
							</a>
							<a
								className={styles["header__social-link"]}
								href="#"
								target="_blank"
							>
								<Viber />
							</a>
							<a
								className={styles["header__social-link"]}
								href="#"
								target="_blank"
							>
								<Telegram />
							</a>
							<a
								className={styles["header__social-link"]}
								href="#"
								target="_blank"
							>
								<Instagram />
							</a>
						</article>
					</div>
					<div className={styles.header__callUs}>
						<p
							className={`${styles["header__texts"]} ${styles["header__socials-text"]}`}
						>
							Звоните Пн-Пт <b>9 - 18</b>
						</p>
						<a
							className={styles["header__callUs-link"]}
							href="tel:+375447625856"
						>
							<b>+375 (44) 762-58-56</b>
						</a>
						<button className={styles["header__callUs-btn"]}>
							Заказать звонок
						</button>
					</div>
					<div className={styles.header__burger} onClick={handleBurgerClick}>
						<span
							className={`${styles["header__burger-line"]} ${isBurgerActive ? styles["header__burger-line_active"] : ""}`}
						></span>
						<span
							className={`${styles["header__burger-line"]} ${isBurgerActive ? styles["header__burger-line_active"] : ""}`}
						></span>
						<span
							className={`${styles["header__burger-line"]} ${isBurgerActive ? styles["header__burger-line_active"] : ""}`}
						></span>
					</div>
				</div>
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
							<NavLink className={styles["nav__item-link"]}>
								Покупателям
							</NavLink>
							<ul
								className={`${styles.nav__menu} ${openMenu === 0 ? styles["nav__menu_open"] : ""}`}
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
							<NavLink className={styles["nav__item-link"]}>О компании</NavLink>
							<ul
								className={`${styles.nav__menu} ${openMenu === 1 ? styles["nav__menu_open"] : ""}`}
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
