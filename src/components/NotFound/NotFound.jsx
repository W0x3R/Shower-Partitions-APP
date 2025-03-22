import styles from "./NotFound.module.scss"
import { Link } from "react-router-dom"
import notFoundGif from "../../assets/notFoundPage/not-found-gif.gif"

const NotFound = () => {
	return (
		<div className={styles.error}>
			<div className="container">
				<h1 className={styles.error__title}>
					<b>Упс! Кажется, такой страницы не существует</b>
				</h1>
				<h2 className={styles.error__subtitle}>
					Возможно, ссылка устарела или была введена неправильно
				</h2>
				<img className={styles.error__img} src={notFoundGif} />
				<h3 className={styles.error__text}>
					Попробуйте вернуться на{" "}
					<Link className={styles["error__text-link"]} to="/">
						главную страницу
					</Link>{" "}
					или воспользуйтесь меню сайта
				</h3>
			</div>
		</div>
	)
}

export default NotFound
