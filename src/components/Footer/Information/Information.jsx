import styles from "./Information.module.scss"
import informationData from "../../../data/footer/informationData"

const Information = () => {
	return (
		<div>
			<h6 className={styles.information__title}>Информация</h6>
			<ul>
				{informationData.map(({ id, text }) => {
					return (
						<li key={id} className={styles.information__item}>
							{text}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Information
