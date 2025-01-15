import { Link } from "react-router-dom"
import logo from "../../../../assets/header/logo.webp"
import styles from "./Logo.module.scss"

export const Logo = () => {
	return (
		<Link
			className={styles.logo}
			to="/"
			aria-label="Перейти на главную страницу"
		>
			<img
				src={logo}
				className={styles.logo__img}
				alt="Логотип DZ System - Душевые перегордки на заказ в Гомеле"
			/>
		</Link>
	)
}

export default Logo
