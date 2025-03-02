import styles from "./Breadcrumbs.module.scss"
import { Link } from "react-router-dom"

const Breadcrumbs = ({ currentPage }) => {
	return (
		<nav className={styles.breadcrumb} aria-label="breadcrumb">
			<div className="container">
				<ul className={styles.breadcrumb__list}>
					<li className={styles.breadcrumb__item}>
						<Link
							className={styles.breadcrumb__link}
							to="/"
							aria-label="Перейти на главную страницу"
						>
							Главная
						</Link>
					</li>
					<span>&#10073;</span>
					<li
						className={styles["breadcrumb__current-page"]}
						aria-label={`Текущая страница - ${currentPage}`}
					>
						{currentPage}
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Breadcrumbs
