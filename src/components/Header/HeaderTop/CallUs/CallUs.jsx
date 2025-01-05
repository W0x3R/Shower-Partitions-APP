import styles from "./CallUs.module.scss"

export const CallUs = () => {
	return (
		<div className={styles.callUs}>
			<p className={`"header__texts" header__animation`}>
				Звоните Пн-Пт <b>9 - 18</b>
			</p>
			<a className={styles.callUs__link} href="tel:+375447625856">
				<b>+375 (44) 762-58-56</b>
			</a>
			<button className={styles.callUs__btn}>Заказать звонок</button>
		</div>
	)
}
