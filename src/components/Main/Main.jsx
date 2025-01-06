import styles from "./Main.module.scss"
import mainBackgroundDesktop from "../../assets/main/main-bg-big.webp"
import mainBackgroundMobile from "../../assets/main/main-bg-small.webp"
import { About } from "./About/About"

export const Main = () => {
	return (
		<main>
			<div className={styles.main__background}>
				<img
					className={styles["main__background-desktop"]}
					src={mainBackgroundDesktop}
				></img>
				<img
					className={styles["main__background-mobile"]}
					src={mainBackgroundMobile}
				></img>
			</div>
			<div className="container">
				<About />
			</div>
		</main>
	)
}
