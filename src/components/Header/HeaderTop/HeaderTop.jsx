import styles from "./HeaderTop.module.scss"
import Logo from "./Logo/Logo"
import { Adress } from "./Adress/Adress"
import { Description } from "./Description/Description"
import { Socials } from "./Socials/Socials"

const HeaderTop = ({ isBurgerActive, onBurgerClick }) => {
	return (
		<div className={styles.header__top}>
			<Logo />
			<Description />
			<Adress />
			<Socials />
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
