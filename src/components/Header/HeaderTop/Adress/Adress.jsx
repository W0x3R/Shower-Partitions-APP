import styles from "./Adress.module.scss"
import Location from "../../../../assets/header/location.svg?react"

export const Adress = () => {
	return (
		<div className={styles.adress}>
			<Location className={styles.adress__img} aria-hidden="true" />
			<address
				className={`${styles.adress__text} header__texts`}
				aria-label="Адрес нашей компании: Беларусь, Гомель, улица Гомельская 25"
			>
				<strong>
					Наш адрес:
					<br aria-hidden="true" /> Беларусь, г.Гомель,
					<br aria-hidden="true" /> ул. Гомельская 25
				</strong>
			</address>
		</div>
	)
}
