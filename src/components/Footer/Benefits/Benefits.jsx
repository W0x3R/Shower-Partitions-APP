import styles from "./Benefits.module.scss"
import checkIcon from "../../../assets/footer/check.svg?url"
import { benefitsData } from "../../../data/footer/benefitsData"

const Benefits = () => {
	return (
		<div className={styles.benefits__wrapper}>
			<h6 className={styles.benefits__title}>Преимущества</h6>
			<ul className={styles.benefits__list}>
				{benefitsData.map(({ id, text }) => {
					return (
						<li key={id} className={styles.benefits__item}>
							<img
								className="footer__icon"
								src={checkIcon}
								aria-hidden="true"
								width="18"
								height="18"
							/>
							{text}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Benefits
