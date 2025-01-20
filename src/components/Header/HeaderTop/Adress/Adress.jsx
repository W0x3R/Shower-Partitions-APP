import styles from "./Adress.module.scss"
import Location from "../../../../assets/header/location.svg?react"

export const Adress = () => {
	return (
		<div className={styles.adress}>
			<Location className={styles.adress__img} aria-hidden="true" />
			<address className={`${styles.adress__text} header__texts`}>
				<strong>
					Наш адрес:
					<br /> Беларусь, г.Гомель,
					<br /> ул. Гомельская 25
				</strong>
			</address>
		</div>
	)
}
