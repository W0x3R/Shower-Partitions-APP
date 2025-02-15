import { benefitsData } from "../../../data/benefitsData"
import CheckIcon from "../../../assets/footer/check.svg?react"
import styles from "./Benefits.module.scss"

export const Benefits = () => {
	return (
		<div className={styles.benefits__wrapper}>
			<h6 className={styles.benefits__title}>Преимущества</h6>
			<ul className={styles.benefits__list}>
				{benefitsData.map(({ id, text }) => {
					return (
						<li key={id} className={styles.benefits__item}>
							<CheckIcon className="footer__icon" aria-hidden="true" />
							{text}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
