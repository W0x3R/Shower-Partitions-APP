import { Link } from "react-router-dom"
import logo from "../../../../assets/header/logo.jpg"
import styles from "./Logo.module.scss"

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<Link className={styles.logo__link} to=".">
				<img src={logo} className={styles.logo__img} />
			</Link>
		</div>
	)
}

export default Logo
