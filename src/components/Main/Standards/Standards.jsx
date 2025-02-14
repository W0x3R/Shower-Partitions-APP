import styles from "./Standards.module.scss"
import standardsData from "../../data/standardsData"

export const Standards = () => {
	return (
		<section className={styles.standards}>
			<div className="container">
				<div className={styles["standards__text-wrapper"]}>
					<h3 className={styles.standards__title}>Наши стандарты работы</h3>
					<p className={styles.standards__text}>
						Качество и безопасность превыше всего
					</p>
				</div>
				<div className={styles["standards__info-wrapper"]}>
					{standardsData.map(({ number, title, subtitle, imgSrc }) => {
						return (
							<div key={number} className={styles["standards__info-inner"]}>
								<div className={styles.standards__block}>
									<p className={styles["standards__block-num"]}>{number}</p>
									<img
										className={styles["standards__block-img"]}
										src={imgSrc}
										loading="lazy"
										alt=""
									/>
									<div className={styles["standards__block-content"]}>
										<p className={styles["standards__block-title"]}>{title}</p>
										<p className={styles["standards__block-text"]}>
											{subtitle}
										</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
