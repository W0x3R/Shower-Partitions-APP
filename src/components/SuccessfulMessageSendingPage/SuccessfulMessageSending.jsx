import styles from "./SuccessfulMessageSending.module.scss"
import clickHand from "../../assets/MainPage/click-hand.svg?url"
import successfulImg from "../../assets/successfulPage/successful-gif.gif"
import { Link } from "react-router-dom"

export const SuccessfulMessageSending = () => {
	return (
		<section className={styles.successful}>
			<div className="container">
				<div className={styles.successful__wrapper}>
					<div className={styles["successful__text-wrapper"]}>
						<h1 className={styles.successful__title}>
							<b>Спасибо за обращение</b>
							<br />в нашу компанию!
						</h1>
						<img
							className={styles.successful__img}
							src={successfulImg}
							width={672}
							height={504}
						/>
						<h2 className={styles.successful__subtitle}>
							Пока посмотрите фото наших работ в хорошем качестве
						</h2>
						<Link className={styles["successful__link"]} to="/portfolio">
							<span>Перейти в портфолио</span>
							<img src={clickHand} alt="" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
