import styles from "./Adress.module.scss"
import Location from "../../../../assets/header/location.svg?react"

export const Adress = () => {
	return (
		<div className={styles.adress}>
			<Location className={styles.adress__img} />
			<p className={`${styles.adress__text} ${styles.header__texts}`}>
				<b>
					Наш адрес: <br></br> Беларусь,г.Гомель, ул. Гомельская 25
				</b>
			</p>
		</div>
	)
}
