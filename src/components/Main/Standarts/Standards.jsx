import styles from "./Standards.module.scss"

export const Standards = () => {
	return (
		<section className={styles.standards}>
			<div className="container">
				<div className={styles.standards__wrapper}>
					<div className={styles["standards__text-wrapper"]}>
						<h3 className={styles.standards__title}>Наши стандарты работы</h3>
						<p className={styles.standards__text}>
							Качество и безопасность превыше всего
						</p>
					</div>
					<div className={styles["standards__info-wrapper"]}>
						<div className={styles.standards__block}>
							<p className={styles["standards__block-num"]}></p>
							<img className={styles["standards__block-img"]} />
							<div className={styles["standards__block-content"]}>
								<p className={styles["standards__block-title"]}></p>
								<p className={styles["standards__block-text"]}></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
