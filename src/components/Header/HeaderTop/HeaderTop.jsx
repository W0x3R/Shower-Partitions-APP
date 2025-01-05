import { Link } from "react-router-dom"
import Location from "../../../assets/header/location.svg?react"
import logo from "../../../assets/header/logo.jpg"
import styles from "./HeaderTop.module.scss"
import SocialLinks from "../../SocialsLinks/SocialLinks"

const HeaderTop = ({ isBurgerActive, onBurgerClick }) => {
	return (
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
				<SocialLinks />
			</div>
			<div className={styles.header__callUs}>
				<p
					className={`${styles["header__texts"]} ${styles["header__socials-text"]}`}
				>
					Звоните Пн-Пт <b>9 - 18</b>
				</p>
				<a className={styles["header__callUs-link"]} href="tel:+375447625856">
					<b>+375 (44) 762-58-56</b>
				</a>
				<button className={styles["header__callUs-btn"]}>
					Заказать звонок
				</button>
			</div>
			<div className={styles.header__burger} onClick={onBurgerClick}>
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
	)
}

export default HeaderTop
