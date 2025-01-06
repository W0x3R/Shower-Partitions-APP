import styles from "./HeaderTop.module.scss"
import Logo from "./Logo/Logo"
import { Adress } from "./Adress/Adress"
import { Description } from "./Description/Description"
import { Socials } from "./Socials/Socials"
import { CallUs } from "./CallUs/CallUs"
import { Burger } from "./Burger/Burger"

const HeaderTop = ({ isBurgerActive, onBurgerClick }) => {
	return (
		<div
			className={`${styles.header__top} ${isBurgerActive ? styles.open : ""}`}
		>
			<Logo />
			<Description />
			<Adress />
			<Socials />
			<CallUs />
			<Burger isBurgerActive={isBurgerActive} onBurgerClick={onBurgerClick} />
		</div>
	)
}

export default HeaderTop
