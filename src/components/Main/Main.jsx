import styles from "./Main.module.scss"
import { About } from "./About/About"
import { Products } from "./Products/Products"
import { Examples } from "./Examples/Examples"
import { Price } from "./Price/Price"
import { Questions } from "./Questions/Questions"
import { Standards } from "./Standards/Standards"

export const Main = () => {
	return (
		<main className={styles.main}>
			<About />
			<Products />
			<Examples />
			<Price />
			<Questions />
			<Standards />
		</main>
	)
}
