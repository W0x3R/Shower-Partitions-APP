import styles from "./Contacts.module.scss"
import SocialLinks from "../../Widgets/SocialsLinks/SocialLinks"
import timeIcon from "../../../assets/footer/time.svg?url"
import callIcon from "../../../assets/footer/call.svg?url"
import mailIcon from "../../../assets/footer/mail.svg?url"
import questionIcon from "../../../assets/footer/question.svg?url"

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles["contacts__wrapper"]}>
				<h6 className={styles.contacts__title}>Наши контакты</h6>
				<div className={styles.contacts__time}>
					<img
						className="footer__icon"
						src={timeIcon}
						aria-hidden="true"
						width="18"
						height="18"
					/>
					<p aria-labelledby="working-time-description-footer">
						Пн-Пт: 9:00 - 18:00 <br />
						Сб-Вс - выходные
					</p>
					<span id="working-time-description-footer" className="sr-only">
						Мы работаем с понедельника по пятницу с 9 утра до 6 часов вечера
					</span>
				</div>
				<div className={styles.contacts__call}>
					<img
						className="footer__icon"
						src={callIcon}
						aria-hidden="true"
						width="18"
						height="18"
					/>
					<a
						className={styles["contacts__number-link"]}
						href="tel:+375447854381"
						aria-label="Связаться с нами по номеру телефона"
						title="Позвонить по номеру +375 44 785 43 81"
					>
						+375 (44) 785-43-81
					</a>
				</div>
				<div className={styles.contacts__mail}>
					<img
						className="footer__icon"
						src={mailIcon}
						aria-hidden="true"
						width="18"
						height="18"
					/>
					<a
						className={styles["contacts__mail-link"]}
						href="mailto:showers.gomel@mail.ru"
						aria-label="Связаться с нами по email"
						rel="noopener noreferrer"
					>
						showers.gomel@mail.ru
					</a>
				</div>
				<div
					className={styles.contacts__social}
					aria-labelledby="online-question-contacts"
				>
					<div className={styles["contacts__socials-inner"]}>
						<img
							className="footer__icon"
							src={questionIcon}
							aria-hidden="true"
							width="18"
							height="18"
						/>
						<p
							className={styles["contacts__socials-text"]}
							id="online-question-contacts"
						>
							<strong>Задайте вопрос, мы онлайн:</strong>
						</p>
					</div>
					<SocialLinks
						gap="socials-footer"
						sizes="socials__link-footer-sizes"
					/>
				</div>
			</div>
		</div>
	)
}

export default Contacts
