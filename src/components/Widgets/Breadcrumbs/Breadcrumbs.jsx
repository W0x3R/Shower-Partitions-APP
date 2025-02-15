import { Link } from "react-router-dom"
import styles from "./Breadcrumbs.module.scss"

export const Breadcrumbs = ({ currentPage }) => {
	return (
		<nav className={styles.breadcrumb} aria-label="breadcrumb">
			<div className="container">
				<ul className={styles.breadcrumb__list}>
					<li className={styles.breadcrumb__item}>
						<Link className={styles.breadcrumb__link} to="/">
							Главная
						</Link>
					</li>
					<span>&#10073;</span>
					<li className={styles["breadcrumb__current-page"]}>{currentPage}</li>
				</ul>
			</div>
		</nav>
	)
}
