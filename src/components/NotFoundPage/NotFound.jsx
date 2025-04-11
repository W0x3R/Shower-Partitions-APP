import styles from "./NotFound.module.scss"
import notFoundImg from "../../assets/notFoundPage/not-found-img.webp"
import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<section className={styles.error}>
			<div className="container">
				<h1 className={styles.error__title}>
					<b>Упс! Кажется, такой страницы не существует</b>
				</h1>
				<h2 className={styles.error__subtitle}>
					Возможно, ссылка устарела или была введена неправильно
				</h2>
				<img
					className={styles.error__img}
					src={notFoundImg}
					width="560"
					height="632"
				/>
				<h3 className={styles.error__text}>
					Попробуйте вернуться на{" "}
					<Link className={styles["error__text-link"]} to="/">
						главную страницу
					</Link>{" "}
					или воспользуйтесь меню сайта
				</h3>
			</div>
		</section>
	)
}

export default NotFound
