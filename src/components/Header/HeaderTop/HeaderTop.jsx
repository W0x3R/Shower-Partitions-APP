import styles from "./HeaderTop.module.scss"
import Logo from "./Logo/Logo"
import { Adress } from "./Adress/Adress"
import { Description } from "./Description/Description"
import { Socials } from "./Socials/Socials"
import { CallUs } from "./CallUs/CallUs"

const HeaderTop = ({ isBurgerActive, onBurgerClick }) => {
	return (
		<div className={styles.header__top}>
			<Logo />
			<Description />
			<Adress />
			<Socials />
			<CallUs />
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
