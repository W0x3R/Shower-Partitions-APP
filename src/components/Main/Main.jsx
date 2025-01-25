import styles from "./Main.module.scss"

import { About } from "./About/About"
import { Products } from "./Products/Products"
import { Examples } from "./Examples/Examples"

export const Main = () => {
	return (
		<main className={styles.main}>
			<About />
			<Products />
			<Examples />
		</main>
	)
}
