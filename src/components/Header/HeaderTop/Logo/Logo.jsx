import styles from "./Logo.module.scss"
import { Link } from "react-router-dom"
import logo from "../../../../assets/header/logo.webp"

const Logo = () => {
	return (
		<Link
			className={styles.logo}
			to="/"
			aria-label="Перейти на главную страницу"
		>
			<img
				src={logo}
				className={`logo__img ${styles.logo__img}`}
				width="88"
				height="88"
				alt="Логотип DZ System - Душевые перегордки на заказ в Гомеле"
				loading="lazy"
			/>
		</Link>
	)
}

export default Logo
