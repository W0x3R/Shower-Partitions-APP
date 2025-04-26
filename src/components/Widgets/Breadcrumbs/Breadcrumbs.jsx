import { Helmet } from "react-helmet"
import styles from "./Breadcrumbs.module.scss"
import { Link } from "react-router-dom"
import getBreadcrumbSchema from "../../../data/schemaMarkup/breadcrumbs"

const Breadcrumbs = ({ currentPage, gray }) => {
	return (
		<>
			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify(getBreadcrumbSchema(currentPage))}
				</script>
			</Helmet>
			<nav
				className={`${styles.breadcrumb} ${gray ? styles.gray : ""}`}
				aria-label="breadcrumb"
			>
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
						<li className={styles.breadcrumb__dash}>&#10073;</li>
						<li
							className={styles["breadcrumb__current-page"]}
							aria-current="page"
						>
							{currentPage}
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Breadcrumbs
