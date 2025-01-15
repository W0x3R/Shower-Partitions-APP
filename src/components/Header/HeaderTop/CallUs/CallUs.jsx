import styles from "./CallUs.module.scss"

export const CallUs = () => {
	return (
		<div className={styles.callUs} aria-labelledby="working-time">
			<p className={`header__texts header__animation`} id="working-time">
				<strong>
					<span>Звоните Пн-Пт</span> 9 - 18
				</strong>
			</p>
			<a
				className={styles.callUs__link}
				href="tel:+375447625856"
				aria-label="Связаться с нами по номеру телефона"
				title="Позвонить по номеру +375 44 762 58 56"
			>
				<strong>+375 (44) 762-58-56</strong>
			</a>
			<button
				type="button"
				className={styles.callUs__btn}
				aria-label="Нажмите, чтобы заказать звонок"
			>
				Заказать звонок
			</button>
		</div>
	)
}
