import styles from "./Main.module.scss"

import { About } from "./About/About"
import { Products } from "./Products/Products"

export const Main = () => {
	return (
		<main className={styles.main}>
			<About />
			<Products />
		</main>
	)
}
