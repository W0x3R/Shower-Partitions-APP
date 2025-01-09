import styles from "./Main.module.scss"

import { About } from "./About/About"

export const Main = () => {
	return (
		<main className={styles.main}>
			<About />
		</main>
	)
}
