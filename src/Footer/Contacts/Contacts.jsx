import SocialLinks from "../../components/SocialsLinks/SocialLinks"
import LocationIcon from "../../assets/footer/location.svg?react"
import TimeIcon from "../../assets/footer/time.svg?react"
import CallIcon from "../../assets/footer/call.svg?react"
import MailIcon from "../../assets/footer/mail.svg?react"
import QuestionIcon from "../../assets/footer/question.svg?react"
import styles from "./Contacts.module.scss"

export const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles["contacts__wrapper"]}>
				<h6 className={styles.contacts__title}>Наши контакты</h6>
				<address className={styles.contacts__adress}>
					<LocationIcon className="footer__icon" />
					Наш адрес: Беларусь,
					<br /> г.Гомель, ул. Гомельская 25
				</address>
				<div className={styles.contacts__time}>
					<TimeIcon className="footer__icon" />
					<p>
						Пн-Пт: 9:00 - 18:00 <br />
						Сб-Вс - выходные
					</p>
				</div>
				<div className={styles.contacts__call}>
					<CallIcon className="footer__icon" />
					<a className={styles["contacts__number-link"]}>+375 (44) 762-58-56</a>
				</div>
				<div className={styles.contacts__mail}>
					<MailIcon className="footer__icon" />
					<a className={styles["contacts__mail-link"]}>
						mail@garderobsystem.ru
					</a>
				</div>
				<div
					className={styles.contacts__social}
					aria-labelledby="online-question-contacts"
				>
					<div className={styles["contacts__socials-inner"]}>
						<QuestionIcon className="footer__icon" />
						<p
							className={styles["contacts__socials-text"]}
							id="online-question-contacts"
						>
							<strong>Задайте вопрос, мы онлайн:</strong>
						</p>
					</div>
					<SocialLinks
						gap="socials-footer"
						sizes="socials__link-contacts-sizes"
					/>
				</div>
			</div>
		</div>
	)
}
