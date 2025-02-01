import standardsGlassImg from "../../../assets/main/zakalyonnoe-steklo.webp"
import standardsThicknessGlassImg from "../../../assets/main/tolshina-stekla.webp"
import standardsMatteGlassImg from "../../../assets/main/matovoe-steklo.webp"
import styles from "./Standards.module.scss"

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
					<div className={styles["standards__info-inner"]}>
						<div className={styles.standards__block}>
							<p className={styles["standards__block-num"]}>01</p>
							<img
								className={styles["standards__block-img"]}
								src={standardsGlassImg}
							/>
							<div className={styles["standards__block-content"]}>
								<p className={styles["standards__block-title"]}>
									Каленое стекло
								</p>
								<p className={styles["standards__block-text"]}>
									Абсолютно всё стекло которое вы приобретете у нас будет
									закаленным. Закаленное стекло крайне сложно разбить,
									единственный способ это сделать - наносить сильные удары
									молотком по торцу изделия. Если у вас получится, то стекло
									распадётся на большое количество не острых фрагментов,
									повредиться ими невозможно.
								</p>
							</div>
						</div>
					</div>
					<div className={styles["standards__info-inner"]}>
						<div className={styles.standards__block}>
							<p className={styles["standards__block-num"]}>02</p>
							<img
								className={styles["standards__block-img"]}
								src={standardsThicknessGlassImg}
							/>
							<div className={styles["standards__block-content"]}>
								<p className={styles["standards__block-title"]}>
									Толщина стекла
								</p>
								<p className={styles["standards__block-text"]}>
									В душевых мы используем исключительно стекло толщиной 8 и
									10мм. Стекло 6мм и менее не обладает необходимой прочностью
									для безопасной эксплуатации. Мы вам советуем стекло толщиной
									минимум 8мм, его свойств и прочности хватит с запасом для
									уверенного пользования.
								</p>
							</div>
						</div>
					</div>
					<div className={styles["standards__info-inner"]}>
						<div className={styles.standards__block}>
							<p className={styles["standards__block-num"]}>03</p>
							<img
								className={styles["standards__block-img"]}
								src={standardsMatteGlassImg}
							/>
							<div className={styles["standards__block-content"]}>
								<p className={styles["standards__block-title"]}>
									Матовое стекло
								</p>
								<p className={styles["standards__block-text"]}>
									Сплошное матирование мы достигаем путём "химического
									травления". Хим.травление технологически более сложный процесс
									чем "пескоструйная обработка", но такое стекло обладает
									очевидными плюсами: его гораздо проще мыть в отличии от
									"пескоструя" и визуально такое стекло более однородно.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
