import styles from "./Spinner.module.scss"
import SpinnerImg from "../../../assets/spinner/spinner.svg?react"
export const Spinner = () => {
	return (
		<div className={styles.spinner}>
			<SpinnerImg className={styles.spinner__img} width={120} height={120} />
			<br />
			<h1 className={styles.spinner__text}>Загрузка...</h1>
		</div>
	)
}
